<?php


namespace App\Exceptions;
use \Exception;
use Throwable;

class AuthException extends Exception
{
    protected string $errorMessage;

    public function __construct(string $errorMessage, string $message = "", $code = 0, Throwable $previous = null)
    {
        parent::__construct($message, $code, $previous);
        $this->errorMessage = $errorMessage;
    }

    public function getErrorMessage() {
        return $this->errorMessage;
    }
}
