import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';

const USER_AGENT = 'weather-app/1.0';

export const NWS_API_BASE = 'https://api.weather.gov';

export async function makeNWSRequest<T>(url: string): Promise<T | null> {
  const headers = {
    'User-Agent': USER_AGENT,
    Accept: 'application/geo+json',
  };

  try {
    const response = await fetch(url, { headers });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return (await response.json()) as T;
  } catch (error) {
    console.error('Error making NWS request:', error);
    return null;
  }
}

export function startStdioServer(server: any) {
  async function main() {
    const transport = new StdioServerTransport();
    await server.connect(transport);
    console.error('Weather MCP Server running on stdio');
  }

  main().catch(error => {
    console.error('Fatal error in main():', error);
    process.exit(1);
  });

}
