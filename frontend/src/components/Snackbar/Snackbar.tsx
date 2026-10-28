import { useEffect } from 'react';
import clsx from 'clsx';

import './Snackbar.css';

const AUTO_HIDE_MS = 5000;

interface SnackbarProps {
    message: string;
    variant?: 'success' | 'error';
    onClose: () => void;
}

/** Всплывающее сообщение над таб-баром. Закрывается крестиком или само через 5 секунд. */
export function Snackbar({ message, variant = 'success', onClose }: SnackbarProps) {
    useEffect(() => {
        const timerId = setTimeout(onClose, AUTO_HIDE_MS);
        return () => clearTimeout(timerId);
    }, [onClose]);

    return (
        <div className={clsx('snackbar', `snackbar--${variant}`)} role="status">
            {/* ИКОНКА: в макете у ошибки красный круг с «!» */}
            <span className="snackbar__marker" aria-hidden="true" />
            <p className="snackbar__text">{message}</p>
            <button
                type="button"
                className="snackbar__close"
                aria-label="Закрыть"
                onClick={onClose}
            >
                ×
            </button>
        </div>
    );
}
