<?php


namespace App\Service\Response;


class ResponseService
{
    private static function responseParamsObject($status, $errors = [], $data = []) : array {
        return [
            'status' => $status,
            'errors' => (object)$errors,
            'data' => (object)$data
        ];
    }

    private static function responseParamsArray($status, $errors = [], $data = []) : array {
        return [
            'status' => $status,
            'errors' => (array)$errors,
            'data' => (array)$data
        ];
    }

    public static function sendJsonResponse($status, $code = 200, $errors = [], $data = []) {
        return response()->json(
            self::responseParamsObject($status, $errors, $data),
            $code
        );
    }

    public static function sendJsonResponseApi($status, $code = 200, $errors = [], $data = []) {
        return response()->json(
            self::responseParamsArray($status, $errors, $data),
            $code
        );
    }

    public static function success($data = []) {
        return self::sendJsonResponse(true, 200, [], $data);
    }

    public static function notFound($data = []) {
        return self::sendJsonResponse(false, 404, [], $data);
    }
}
