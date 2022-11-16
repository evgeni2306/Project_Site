<?php
declare(strict_types=1);

namespace App\Files;

trait curl_get
{
    function curlGet($url, $parameter = null): array
    {
        $url = \env('SERVER_URL') . $url . $parameter;
        $ch = curl_init($url);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
        curl_setopt($ch, CURLOPT_HEADER, false);
        $data = curl_exec($ch);
        $info = curl_getinfo($ch);
        curl_close($ch);
        return [$info['http_code'], json_decode($data)];
    }
}
