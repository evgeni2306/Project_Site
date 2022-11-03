<?php
declare(strict_types=1);

namespace App\Files;

trait curl_post
{
    function curlPost($url, $request): array
    {
        $url = \env('SERVER_URL') . $url;
        $ch = curl_init($url);
        curl_setopt($ch, CURLOPT_POST, 1);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_POSTFIELDS, http_build_query($request, '', '&'));
        $data = curl_exec($ch);
        $info = curl_getinfo($ch);
        curl_close($ch);
        return [$info['http_code'],$data];
    }
}
