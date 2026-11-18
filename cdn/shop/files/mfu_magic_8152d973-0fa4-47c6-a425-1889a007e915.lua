local getopt = require('getopt')
local utils =  require('utils')

-- global
local bxor = bit32.bxor

copyright = 'Copyright (c) 2017 IceSQL AB. All rights reserved.'
author = 'Christian Herrmann'
version = 'v1.0.5'
desc = 'This script enables easy programming of a MAGIC NTAG 21* card'
example =
[[
	-- wipe tag
	script run mfu_magic -w
	
	-- wipe a locked down tag by giving the password
	script run mfu_magic -w -k ffffffff
	
	--read magic tag configuration
	script run mfu_magic -c 
	
	-- set uid
	script run mfu_magic -u 04112233445566
	
	-- set pwd / pack
	script run mfu_magic -p 11223344 -a 8080
	
	-- set version to NTAG213
	script run mfu_magic -v 0004040201000f03
	
	-- set signature
	script run mfu_magic -s 1122334455667788990011223344556677889900112233445566778899001122
]]
usage =
[[
script run mfu_magic -h -c -w -k <passwd> -u <uid> -t <type> -p <passwd> -a <pack> -s <signature> -o <otp> -v <version>
   
Arguments:
	-h		this help
	-c		read magic configuration
	-u		UID (14 hexsymbols), set UID on tag
	-t		tag type to impersonate
				 1 = UL_EV1 48k
				 2 = UL_EV1 128k
				 3 = NTAG 210
				 4 = NTAG 212
				 5 = NTAG 213 (true)
				 6 = NTAG 215 (true)
				 7 = NTAG 216 (true)
				 8 = NTAG I2C 1K
				 9 = NTAG I2C 2K
				10 = NTAG I2C 1K PLUS
				11 = NTAG I2C 2K PLUS
	-p		password (8 hexsymbols),  set password on tag.
	-a		pack ( 4 hexsymbols), set pack on tag.
	-s		signature data (64 hexsymbols), set signature data on tag.
	-o		OTP data (8 hexsymbols), set one-time-pad data on tag.
	-v		version data (16 hexsymbols), set version data on tag.
	-w		wipe tag. You can specify password if the tag has been locked down. Fills tag with zeros and put default values for NTAG213 (like -t 5) 
	-k		pwd to use with the wipe option
]]
--- 
-- A debug printout-function
function dbg(args)
    if type(args) == "table" then
		local i = 1
		while args[i] do
			dbg(args[i])
			i = i+1
		end
	else
		print("###", args)
	end	
end	
--- 
-- This is only meant to be used when errors occur
function oops(err)
	print("ERROR: ",err)
end
--- 
-- Usage help
function help()
	print(copyright)
	print(version)
	print(desc)
	print(usage)
	print('Example usage')
	print(example)
end
--
-- Read magic configuration
local function read_config()
--[[
hex(252) 0xFC	|  0 = 213,  1 = 215,  2 = 216
--]]
	-- read PWD
	core.console("hf 14a raw -c -s 30F0")
	-- read PACK
	core.console("hf 14a raw -c -s 30F1")
	-- read SIGNATURE
	core.console("hf 14a raw -c -s 30F2")
	core.console("hf 14a raw -c -s 30F3")
	core.console("hf 14a raw -c -s 30F4")
	core.console("hf 14a raw -c -s 30F5")
	core.console("hf 14a raw -c -s 30F6")
	core.console("hf 14a raw -c -s 30F7")
	core.console("hf 14a raw -c -s 30F8")
	core.console("hf 14a raw -c -s 30F9")
	-- read VERSION
	core.console("hf 14a raw -c -s 30FA")
	core.console("hf 14a raw -c -s 30FB")
	-- read config
	core.console("hf 14a raw -c -s 30FC")
end
---
-- Write SIGNATURE data
local function write_signature(data)

	-- uid string checks
	if data == nil then return nil, 'empty data string' end
	if #data == 0 then return nil, 'empty data string' end
	if #data ~= 64 then return nil, 'data wrong length. Should be 32 hex bytes' end

	local b,c
	local cmd = 'hf 14a raw -s -c a2f%d%s'
	local j = 2
	for i = 1, #data, 8 do
		b = data:sub(i,i+7)
		c = cmd:format(j,b)	
		core.console(c)
		j = j + 1
	end
	return true, 'Ok'
end
---
-- Write PWD
local function write_pwd(pwd)	
	-- PWD string checks
	if pwd == nil then return nil, 'empty PWD string' end
	if #pwd == 0 then return nil, 'empty PWD string' end
	if #pwd ~= 8 then return nil, 'PWD wrong length. Should be 4 hex bytes' end

	core.console("hf 14a raw -c -s A2F0"..pwd)
	return true,'Ok'
end
---
-- Write PACK
local function write_pack(pack)	
	-- PACK string checks
	if pack == nil then return nil, 'empty PACK string' end
	if #pack == 0 then return nil, 'empty PACK string' end
	if #pack ~= 8 then return nil, 'PACK wrong length. Should be 4 hex bytes' end

	core.console("hf 14a raw -c -s A2F1"..pack)
	return true,'Ok'
end
--
-- Write OTP block
local function write_otp(block3)

	-- OTP string checks
	if block3 == nil then return nil, 'empty OTP string' end
	if #block3 == 0 then return nil, 'empty OTP string' end
	if #block3 ~= 8 then return nil, 'OTP wrong length. Should be 4 hex bytes' end
	
	print('    03  |'.. block3)
	-- write block 3	
	core.console("hf 14a raw -c -s A203"..block3)
	return true,'Ok'
end
--
-- Writes a UID with bcc1, bcc2.  Needs a magic tag.
local function write_uid(uid)

	-- uid string checks
	if uid == nil then return nil, 'empty uid string' end
	if #uid == 0 then return nil, 'empty uid string' end
	if #uid ~= 14 then return nil, 'uid wrong length. Should be 7 hex bytes' end

	local uidbytes = utils.ConvertHexToBytes(uid)
	
	local bcc1 = bxor(bxor(bxor(uidbytes[1], uidbytes[2]), uidbytes[3]), 0x88)
	local bcc2 = bxor(bxor(bxor(uidbytes[4], uidbytes[5]), uidbytes[6]), uidbytes[7])
	
	local block0 = string.format('%02X%02X%02X%02X', uidbytes[1], uidbytes[2], uidbytes[3], bcc1)
	local block1 = string.format('%02X%02X%02X%02X', uidbytes[4], uidbytes[5], uidbytes[6], uidbytes[7])
	local block2 = string.format('%02X%02X%02X%02X', bcc2, 0x48, 0x00, 0x00)

	print('Writing')	
	print('new UID | '..uid)
	print('Blk#    |')
	print('    00  |'.. block0)  
	print('    01  |'.. block1)
	print('    02  |'.. block2)
	
	core.clearCommandBuffer()

	-- write block 0
	core.console("hf 14a raw -c -s A200"..block0)

	-- write block 1
	core.console("hf 14a raw -c -s A201"..block1)

	-- write block 2	
	core.console("hf 14a raw -c -s A202"..block2)
	--halt
	--core.console("hf 14a raw -c -a 5000")
	return true,'Ok'
end
---
-- Write VERSION data,
-- make sure you have correct version data
local function write_version(data)

	-- version string checks
	if data == nil then return nil, 'empty version string' end
	if #data == 0 then return nil, 'empty version string' end
	if #data ~= 16 then return nil, 'version wrong length. Should be 8 hex bytes' end

	local b1 = data:sub(1,8)
	local b2 = data:sub(9,16)

	core.console('hf 14a raw -s -c a2fa'..b1)
	core.console('hf 14a raw -s -c a2fb'..b2)
	return true,'Ok'	
end
---
-- Set tag type.  Predefinde version data together with magic type set.
-- Since cmd always gives 10 bytes len (data+crc) we can impersonate the following types
-- we only truely be three types NTAG 213,215 and 216 
local function set_type(tagtype)

	-- tagtype checks
	if type(tagtype) == 'string' then tagtype = tonumber(tagtype, 10) end	
	if tagtype == nil then return nil, 'empty tagtype' end	
	
	if tagtype == 1 then 
		print('Setting: UL-EV1 48')
		-- UL-EV1 (48) 00 04 03 01 01 00 0b 03
		core.console('hf 14a raw -s -c a2fa00040301')
		core.console('hf 14a raw -s -c a2fb01000b03')
		core.console('hf 14a raw -s -c a2fc00000000')
		-- Setting OTP to default 0x00 00 00 00
		core.console('hf 14a raw -s -c a20300000000')
		-- Setting UL-Ev1 default config bl 16,17
		core.console('hf 14a raw -s -c a210000000FF')
		core.console('hf 14a raw -s -c a21100050000')
	elseif tagtype == 2 then 
		print('Setting: UL-EV1 128')
		-- UL-EV1 (128) 00 04 03 01 01 00 0e 03
		core.console('hf 14a raw -s -c a2fa00040301')
		core.console('hf 14a raw -s -c a2fb01000e03')
		core.console('hf 14a raw -s -c a2fc01000000')
		-- Setting OTP to default 0x00 00 00 00
		core.console('hf 14a raw -s -c a20300000000')
		-- Setting UL-Ev1 default config bl 37,38
		core.console('hf 14a raw -s -c a225000000FF')
		core.console('hf 14a raw -s -c a22600050000')		
	elseif tagtype == 3 then 	
		print('Setting: NTAG 210')
		-- NTAG-210 00 04 04 01 01 00 0b 03 
		core.console('hf 14a raw -s -c a2fa00040401')
		core.console('hf 14a raw -s -c a2fb01000b03')
		core.console('hf 14a raw -s -c a2fc00000000')
		-- Setting NTAG210 default CC block456
		core.console('hf 14a raw -s -c a203e1100600')
		core.console('hf 14a raw -s -c a2040300fe00')
		core.console('hf 14a raw -s -c a20500000000')
		-- Setting  cfg1/cfg2
		core.console('hf 14a raw -s -c a210000000FF')
		core.console('hf 14a raw -s -c a21100050000')		
	elseif tagtype == 4 then 
		print('Setting: NTAG 212')
		-- NTAG-212 00 04 04 01 01 00 0E 03 
		core.console('hf 14a raw -s -c a2fa00040401')
		core.console('hf 14a raw -s -c a2fb01000E03')
		core.console('hf 14a raw -s -c a2fc00000000')		
		-- Setting NTAG212 default CC block456
		core.console('hf 14a raw -s -c a203e1101000')
		core.console('hf 14a raw -s -c a2040103900a')
		core.console('hf 14a raw -s -c a205340300fe')
		-- Setting  cfg1/cfg2
		core.console('hf 14a raw -s -c a225000000FF')
		core.console('hf 14a raw -s -c a22600050000')			
	elseif tagtype == 5 then 	
		print('Setting: NTAG 213')
		-- NTAG-213 00 04 04 02 01 00 0f 03 
		core.console('hf 14a raw -s -c a2fa00040402')
		core.console('hf 14a raw -s -c a2fb01000F03')
		core.console('hf 14a raw -s -c a2fc00000000')
		-- Setting NTAG213 default CC block456
		core.console('hf 14a raw -s -c a203e1101200')
		core.console('hf 14a raw -s -c a2040103a00c')
		core.console('hf 14a raw -s -c a205340300fe')
		-- setting cfg1/cfg2 
		core.console('hf 14a raw -s -c a229000000ff')
		core.console('hf 14a raw -s -c a22a00050000')		
	elseif tagtype == 6 then
		print('Setting: NTAG 215')	
		-- NTAG-215 00 04 04 02 01 00 11 03
		core.console('hf 14a raw -s -c a2fa00040402')
		core.console('hf 14a raw -s -c a2fb01001103')
		core.console('hf 14a raw -s -c a2fc01000000')
		-- Setting NTAG215 default CC block456
		core.console('hf 14a raw -s -c a203e1103e00')
		core.console('hf 14a raw -s -c a2040300fe00')
		core.console('hf 14a raw -s -c a20500000000')
		-- setting cfg1/cfg2 
		core.console('hf 14a raw -s -c a283000000ff')
		core.console('hf 14a raw -s -c a28400050000')
	elseif tagtype == 7 then
		print('Setting: NTAG 216')	
		--NTAG-216 00 04 04 02 01 00 13 03
		core.console('hf 14a raw -s -c a2fa00040402')
		core.console('hf 14a raw -s -c a2fb01001303')
		core.console('hf 14a raw -s -c a2fc02000000')
		-- Setting NTAG216 default CC block456
		core.console('hf 14a raw -s -c a203e1106d00')
		core.console('hf 14a raw -s -c a2040300fe00')
		core.console('hf 14a raw -s -c a20500000000')
		-- setting cfg1/cfg2 
		core.console('hf 14a raw -s -c a2e3000000ff')
		core.console('hf 14a raw -s -c a2e400050000')
	elseif tagtype == 8 then
		print('Setting: NTAG I2C 1K')	
		--NTAG_I2C_1K 00 04 04 05 02 01 13 03
		core.console('hf 14a raw -s -c a2fa00040405')
		core.console('hf 14a raw -s -c a2fb02011303')
		core.console('hf 14a raw -s -c a2fc02000000')
		-- Setting NTAG I2C 1K default CC block456
		core.console('hf 14a raw -s -c a203e1106D00')
		core.console('hf 14a raw -s -c a2040300fe00')
		core.console('hf 14a raw -s -c a20500000000')		
	elseif tagtype == 9 then 
		print('Setting: NTAG I2C 2K')	
		--NTAG_I2C_2K 00 04 04 05 02 01 15 03
		core.console('hf 14a raw -s -c a2fa00040405')
		core.console('hf 14a raw -s -c a2fb02011503')
		core.console('hf 14a raw -s -c a2fc02000000')
		-- Setting NTAG I2C 2K default CC block456
		core.console('hf 14a raw -s -c a203e110EA00')
		core.console('hf 14a raw -s -c a2040300fe00')
		core.console('hf 14a raw -s -c a20500000000')
	elseif tagtype == 10 then
		print('Setting: NTAG I2C plus 1K')	
		--NTAG_I2C_1K 00 04 04 05 02 02 13 03
		core.console('hf 14a raw -s -c a2fa00040405')
		core.console('hf 14a raw -s -c a2fb02021303')
		core.console('hf 14a raw -s -c a2fc02000000')
		-- Setting NTAG I2C 1K default CC block456
		core.console('hf 14a raw -s -c a203e1106D00')
		core.console('hf 14a raw -s -c a2040300fe00')
		core.console('hf 14a raw -s -c a20500000000')		
	elseif tagtype == 11 then 
		print('Setting: NTAG I2C plus 2K')	
		--NTAG_I2C_2K 00 04 04 05 02 02 15 03
		core.console('hf 14a raw -s -c a2fa00040405')
		core.console('hf 14a raw -s -c a2fb02021503')
		core.console('hf 14a raw -s -c a2fc02000000')
		-- Setting NTAG I2C 2K default CC block456
		core.console('hf 14a raw -s -c a203e1106D00')
		core.console('hf 14a raw -s -c a2040300fe00')
		core.console('hf 14a raw -s -c a20500000000')		
	end
	-- elseif tagtype == 10 then 	
		-- NTAG 203 should not answer the GETVERSION...
		-- print('Setting: NTAG 203')
		-- -- NTAG-203 00 04 04 01 01 00 0b 03 
		-- core.console('hf 14a raw -s -c a2fa00040401')
		-- core.console('hf 14a raw -s -c a2fb01000b03')
		-- core.console('hf 14a raw -s -c a2fc00000000')
		-- -- Setting NTAG203 default CC block456
		-- core.console('hf 14a raw -s -c a203e1101200')
		-- core.console('hf 14a raw -s -c a2040103a010')
		-- core.console('hf 14a raw -s -c a205440300fe')	
	return true, 'Ok'
end
---
-- wipe tag
local function wipe(pwd)
	local err, msg
	
	--select & auth if needed
	local auth = 'hf 14a raw -c -s -p '
	if pwd then
		auth = auth..'1B'..pwd
	end
	print('auth', auth)
	core.console(auth)
	
	
	local cmd_empty = 'hf 14a raw -p -c A2%02X00000000'
	local cmd_cfg1  = 'hf 14a raw -p -c A2%02X000000FF'
	local cmd_cfg2  = 'hf 14a raw -p -c A2%02X00050000'
	for b = 3, 0xFB do			
		
		--configuration block 0
		if b == 0x29 or b == 0x83 or b == 0xe3 then
			local cmd = (cmd_cfg1):format(b)
			--print(cmd)
			core.console(cmd)
		--configuration block 1
		elseif b == 0x2a or b == 0x84 or b == 0xe4 then
			local cmd = (cmd_cfg2):format(b)
			--print(cmd)
			core.console(cmd)
		else	
			--print(cmd_empty:format(b))
			core.console(cmd_empty:format(b))
		end
	end
	
	-- turn off
	print('turning off')
	core.console('hf 14a raw -c 3000')
	
	print('setting default values...')
	
	-- set NTAG213 default values
	err, msg = set_type(5)
	if err == nil then oops(msg) else print('New type :', 'NTAG 213') end
	
	--set UID
	local uid = '04112233445566'
	err, msg = write_uid(uid)
	if err == nil then oops(msg) else print('New UID :', uid) end
	
	--set pwd
	pwd = 'FFFFFFFF'
	err, msg = write_pwd(pwd)
	if err == nil then oops(msg) else print('New PASSWORD :', pwd) end
	
	--set pack
	local pack = '00000000'
	err, msg = write_pack(pack)	
	if err == nil then oops(msg) else print('New PACK :', '0000') end	
	return
end
--- 
-- The main entry point
function main(args)

	print( string.rep('--',20) )
	print( string.rep('--',20) )	
	print()

	local err, msg, pwd
 	local do_wipe = false
	
	-- Read the parameters
	for o, a in getopt.getopt(args, 'hck:u:t:p:a:s:o:v:w') do
		if o == "h" then return help() end
		if o == "c" then return read_config() end

		--key 
		if o == 'k' then pwd = a end
		
		--wipe tag
		if o == "w" then do_wipe = true end
		
		-- write uid
		if o == "u" then err, msg = write_uid(a) end

		-- write type/version	
		if o == "t" then err, msg = set_type(a) end
		
		-- write pwd
		if o == "p" then err, msg = write_pwd(a) end
		
		-- write pack
		if o == "a" then err, msg = write_pack(a) end
		
		-- write signature
		if o == "s" then err, msg = write_signature(a) end

		-- write otp
		if o == "o" then err, msg = write_otp(a) end

		-- write version
		if o == "v" then err, msg = write_version(a) end
		
		--if err == nil then return oops(msg) end
	end	
	
	if  do_wipe then  wipe(pwd) end
end

main(args)
