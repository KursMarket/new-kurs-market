<?php


namespace App\Service\Implementation;


use App\Models\Option;
use App\Models\School;
use App\Service\OptionService;
use App\Traits\ClientRequest;

class OptionServiceImpl implements OptionService
{
    use ClientRequest;

    public function getOption(string $optionName): mixed
    {
        $option = Option::where('option_name', $optionName)->first();
        if (!$option) return [];

        $data = @unserialize($option->option_value);

        if (false === $data) {
            return $option->option_value;
        }

        return unserialize($option->option_value);
    }

    public function getPromoModule(): array
    {
        $option = $this->getOption(Option::PROMO_MODULE);

        $data = [];

        if ($option) {
            $data['promocode'] = $option['promo'];
            $data['title'] = $option['title'];
            $data['description'] = html_entity_decode($option['description'], ENT_QUOTES, 'UTF-8');

            $schoolsId = [];
            if (array_key_exists('schools', $option) && $option['schools']) {
                foreach ($option['schools'] as $item) {
                    $schoolsId[] = $item['id'];
                }
            }

            if ($schoolsId) {

                foreach ($schoolsId as $item) {
                    $school = School::find($item);
                    $data['schools'][] = [
                        'id' => $school->user_id,
                        'url' => $school->url,
                        'image' => $school->user->getFirstMediaUrl('school-preview'),
                        'name' => $school->short_title ? $school->short_title : $school->name,
                        'promo' => $school->promo
                    ];
                }
            }
        }

        return $data;
    }

    public function getCooperationModule(): array
    {
        $option = $this->getOption(Option::COLLABORATION_MODULE);
        if (!$option) return [];

        $schools = [];

        foreach ($option as $school) {
            $result = School::find($school['id']);

            if ($result) {
                $schools[] = [
                    'id' => $result->user_id,
                    'url' => $result->url,
                    'name' => $result->short_title ? $result->short_title : $result->name,
                    'image' => $result->user->getFirstMediaUrl('school-preview')
                ];
            }
        }

        return $schools;
    }
}
