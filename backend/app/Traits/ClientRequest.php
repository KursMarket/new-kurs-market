<?php


namespace App\Traits;
use \GuzzleHttp\Client;
use GuzzleHttp\Exception\GuzzleException;
use Illuminate\Support\Facades\Log;

trait ClientRequest
{
    public function makeClientRequest(string $path, array $data = []): mixed
    {
        $method = array_key_exists('method', $data)
            ? $data['method']
            : 'GET'
        ;

        $baseUrl = env('ADMIN_SERVICE');
        $client = new Client(['base_uri' => $baseUrl]);
        try {
            if ($method === 'GET') {
                $result = $client->get("api/{$path}");
            } else {
                $headers =  [
                    'content-type' => 'application/json',
                    'verify' => true,
                ];
                $result = $client->post("api/{$path}", [
                    'headers' => $headers,
                    'body' => $data['body']
                ]);
            }

            return $result
                ->getBody()
                ->getContents()
                ;

        } catch (GuzzleException $e) {
            Log::error("ClientRequest Error from path {$baseUrl}/api/{$path}. Message: {$e->getMessage()}");
            return null;
        }
    }
}
