package com.reactproject.react.salon.reservation.exception;

/**
 * リソースが見つからない場合にスローされる例外
 *
 * @author tu
 */
public class NotFoundException extends RuntimeException {

    public NotFoundException(String message) {
        super(message);
    }

    public NotFoundException(String message, Throwable cause) {
        super(message, cause);
    }
}

