This is a simple monorepo example of implementing MCP Servers
It uses the following workspaces:
- [Weather Alerts MCP Server](https://github.com/adijesori/mcp-poc/tree/master/weather-alerts-stdio) - Using stdio protocol.
- [Weather Forecast MCP Server](https://github.com/adijesori/mcp-poc/tree/master/weather-forecast-stdio) - Using stdio protocol.
- [Weather Forecast MCP Server](https://github.com/adijesori/mcp-poc/tree/master/weather-http) - Bundle the two above into one MCP Server over HTTP/SSE protocol.

In order to run it:
1. Clone the repository
2. Run `npm i`
3. Run `npm run build --workspaces`.
4. Running alerts with MCP inspector:
`npx @modelcontextprotocol/inspector node weather-alerts-stdio/build/index.js`
5. Running forecast with MCP inspector:
`npx @modelcontextprotocol/inspector node weather-forecast-stdio/build/index.js`
6. Running SSE with inspector:
In one terminal:
`npm start -w weather-http`
In other terminal:
`npx @modelcontextprotocol/inspector`
7. In order to use it in [Claude Desktop](https://claude.ai/download):
- Open your Claude for Desktop App configuration at `~/Library/Application Support/Claude/claude_desktop_config.json` in a text editor. Make sure to create the file if it doesn't exist
- Add this content to the file (Make sure to replace `/ABSOLUTE/PATH/TO/PARENT/FOLDER` with the correct path):
```json
{
  "mcpServers": {
    "weather": {
      "command": "node",
      "args": [
        "/ABSOLUTE/PATH/TO/PARENT/FOLDER/mcp-poc/weather-http/build/index.js"
      ]
    }
  }
}
```
- Restart Claude Desktop, and start using it by asking for example "What's the weather in NY?"
