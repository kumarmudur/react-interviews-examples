import {useEffect, useRef} from "react";

const usePrevious = (previousCount) => {
    const ref = useRef();

    useEffect(() => {
        ref.current = previousCount;
    }, [previousCount]);

    return ref.current;
};

export default usePrevious;

