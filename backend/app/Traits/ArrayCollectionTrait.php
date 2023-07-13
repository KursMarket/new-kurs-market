<?php


namespace App\Traits;


trait ArrayCollectionTrait
{
    public function mapTreeBuilding(array $dataset): array
    {
        $tree = [];
        foreach ($dataset as $id => &$node) {
            if (!$node['parent']) {
                $tree[$id] = &$node;
            } else {
                $dataset[$node['parent']]['children'][$id] = &$node;
            }
        }

        return $tree;
    }

    public function arrayValuesRecursive(&$arr): array
    {
        $arr = array_values($arr);
        foreach ($arr as &$item) {
            if (array_key_exists('children', $item)) {
                $this->arrayValuesRecursive($item['children']);
            }
        }
        return $arr;
    }
}
