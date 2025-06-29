<?php

declare(strict_types=1);

namespace App\Application\Handlers;

use App\Application\Controller\ControllerPayload;
use Throwable; 
use Slim\Exception\HttpException; 
use Slim\Exception\HttpNotFoundException;
use Slim\Exception\HttpForbiddenException;
use Slim\Exception\HttpBadRequestException;
use Slim\Exception\HttpUnauthorizedException;
use App\Application\Controller\ControllerError;
use Slim\Exception\HttpNotImplementedException;
use Slim\Exception\HttpMethodNotAllowedException;
use Psr\Http\Message\ResponseInterface as Response;
use Slim\Handlers\ErrorHandler as SlimErrorHandler;

class HttpErrorHandler extends SlimErrorHandler
{
    /**
     * @inheritdoc
     */
    protected function respond(): Response
    {
        $exception = $this->exception;
        $statusCode = 500;
        $error = new ControllerError(
            ControllerError::SERVER_ERROR,
            'An internal error has occurred while processing your request.'
        );

        if ($exception instanceof HttpException) {
            $statusCode = $exception->getCode();
            $error->setDescription($exception->getMessage());

            if ($exception instanceof HttpNotFoundException) {
                $error->setType(ControllerError::RESOURCE_NOT_FOUND);
            } elseif ($exception instanceof HttpMethodNotAllowedException) {
                $error->setType(ControllerError::NOT_ALLOWED);
            } elseif ($exception instanceof HttpUnauthorizedException) {
                $error->setType(ControllerError::UNAUTHENTICATED);
            } elseif ($exception instanceof HttpForbiddenException) {
                $error->setType(ControllerError::INSUFFICIENT_PRIVILEGES);
            } elseif ($exception instanceof HttpBadRequestException) {
                $error->setType(ControllerError::BAD_REQUEST);
            } elseif ($exception instanceof HttpNotImplementedException) {
                $error->setType(ControllerError::NOT_IMPLEMENTED);
            }
        }

        if (
            !($exception instanceof HttpException)
            && $exception instanceof Throwable
            && $this->displayErrorDetails
        ) {
            $error->setDescription($exception->getMessage());
        }

        $payload = new ControllerPayload($statusCode, null, $error);
        $encodedPayload = json_encode($payload, JSON_PRETTY_PRINT);

        $response = $this->responseFactory->createResponse($statusCode);
        $response->getBody()->write($encodedPayload);

        return $response->withHeader('Content-Type', 'application/json');
    }
}
