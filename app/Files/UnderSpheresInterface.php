<?php
declare(strict_types=1);

namespace App\Files;

interface UnderSpheresInterface
{
    public function createPage(int $id);

    public function getData(int $id);
}
