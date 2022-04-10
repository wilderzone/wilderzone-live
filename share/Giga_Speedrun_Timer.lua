local module = {}
-- Speedrun timer by Giga. Version 1.0.0
module.name						= "Giga_Speedrun_Timer"  -- This HAS to be the same as the filename minus the trailing .lua
module.opts						= {}
module.opts.X_Position			= 94.0
module.opts.Y_Position			= 50.0
module.opts.Caps_To_Complete	= 5
module.opts.Text_Colour			= rgb(255,255,255)
module.opts.Background_Colour	= rgba(0,0,0,75)
module.opts.bindKeyStart		= "B"
module.opts.bindKeyReset		= "H"
module.start_time				= 0
module.end_time					= 0
module.run_in_progress			= false
module.run_complete				= false
module.run_start_frame			= false

local bound = false

function module.formatTime(time)
	local time_string = tostring(time)
	local time_string_length = #time_string
	local padding_zeros = {'000000', '00000', '0000', '000', '00', '0', ''}
	time_string = padding_zeros[time_string_length] .. time_string

	local millis = string.sub(time_string, -3, -1)
	local ss = tonumber(string.sub(time_string, 1, -4)) % 60
	if #tostring(ss) == 1 then
		ss = '0' .. ss
	end
	local mm = tonumber(string.sub(time_string, 1, -4)) // 60
	if #tostring(mm) == 1 then
		mm = '0' .. mm
	end

	return mm .. ":" .. ss .. ":" .. millis
end

function module.startRun()
	if module.run_in_progress == false then
		module.run_in_progress = true
		module.run_complete = false
		module.start_time = game.realTimeSeconds()
		module.run_start_frame = true
	end
end

function module.endRun()
	if module.run_in_progress == true then
		module.run_in_progress = false
		module.end_time = math.floor((game.realTimeSeconds() - module.start_time) * 1000)
	end
end

function module.draw(res_x, res_y)
	-- Initialise the keybinds
	if bound == false then
		if module.opts.bindKeyStart ~= "" then
			bindKey(module.opts.bindKeyStart, Input.PRESSED, 
				function() 
					module.startRun()
				end)
		end
		if module.opts.bindKeyReset ~= "" then
			bindKey(module.opts.bindKeyReset, Input.PRESSED, 
				function() 
					module.endRun()
				end)
		end
		bound = true
	end


	local xpos = math.floor(module.opts.X_Position / 100 * res_x)
	local ypos = math.floor(module.opts.Y_Position / 100 * res_y)
	local time = module.formatTime(module.end_time)
	if module.run_in_progress == true then
		time = module.formatTime(math.floor((game.realTimeSeconds() - module.start_time) * 1000))
	end

	-- Draw the game time and its background
	if module.run_complete == true then
		drawRect(xpos - 80, ypos - 40, xpos + 80, ypos, module.opts.Background_Colour)
		drawUTText("DONE", module.opts.Text_Colour, xpos, ypos - 24, 1, 2, 1)
	end
	drawRect(xpos - 130, ypos, xpos + 130, ypos + 50, module.opts.Background_Colour)
	drawText(time .. "ms", module.opts.Text_Colour, xpos, ypos + 27, 1, 2)
	drawRect(xpos - 85, ypos + 50, xpos + 85, ypos + 70, module.opts.Background_Colour)
	local plural = 'S'
	if module.opts.Caps_To_Complete == 1 then
		plural = ''
	end
	drawSmallText("SPEEDRUN TO " .. module.opts.Caps_To_Complete .. " CAP" .. plural, module.opts.Text_Colour, xpos, ypos + 61, 1, 1, 1)

	-- Flash the screen on the first frame of a run.
	if module.run_start_frame == true then
		drawRect(0, 0, res_x, res_y, rgba(255,255,255,75))
	end
	module.run_start_frame = false

	-- If capped out
	if game.score(hud_data.left_team) >= module.opts.Caps_To_Complete or game.score(hud_data.right_team) >= module.opts.Caps_To_Complete or game.score(hud_data.left_team) + game.score(hud_data.right_team) >= module.opts.Caps_To_Complete then
		module.endRun()
		module.run_complete = true
	end
end

return module