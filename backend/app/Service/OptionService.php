<?php


namespace App\Service;


interface OptionService
{
    public function getOption(string $optionName): mixed;

    public function getPromoModule(): array;

    public function getCooperationModule(): array;
}
