local wezterm = require("wezterm")

local config = wezterm.config_builder()

config.initial_cols = 120
config.initial_rows = 30

config.font_size = 16
config.font = wezterm.font('JetBrains Mono')
config.window_decorations = "RESIZE"
config.enable_tab_bar = false
config.colors = {
  cursor_bg = '#FFCE54'
}

config.color_scheme = 'tokyonight_night'


return config
