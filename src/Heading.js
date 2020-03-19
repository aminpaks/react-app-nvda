import { cloneElement, Children, useRef, useEffect } from 'react'

export const Heading = ({ children }) => {
    const child = Children.only(children);
    const childRef = useRef();

    useEffect(() => {
        const timerId = setTimeout(() => {
            childRef.current.focus()
        }, 400);
        return () => {
            clearTimeout(timerId);
        };
    }, [child])

    return cloneElement(child, { tabIndex: '-1', ref: childRef });
}