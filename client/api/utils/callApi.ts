export const callApi = async ({
  url,
  method = 'GET',
  body,
}: {
  url: string;
  method?: 'GET' | 'POST' | 'DELETE' | 'PUT';
  body?: any;
}) => {
  const normalizeBody = body ? JSON.stringify(body) : undefined;
  const response = await fetch(url, { method, body: normalizeBody });
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  if (method !== 'GET') {
    return response;
  }
  const data = await response.json();
  return data;
};
