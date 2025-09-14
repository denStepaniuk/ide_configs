return {
  "ray-x/lsp_signature.nvim",
  event = "BufReadPre",
  config = function()
    local lspsig = require("lsp_signature")
    lspsig.setup({
      bind = false,           -- disables auto popups
      floating_window = true,
      hint_enable = true,
      handler_opts = { border = "rounded" },
    })

    -- Map Ctrl+K in insert mode to show signature
    vim.api.nvim_set_keymap(
      "i",
      "<C-k>",
      "<cmd>lua require('lsp_signature').toggle_float_win()<CR>",
      { noremap = true, silent = true }
    )
  end,
}
