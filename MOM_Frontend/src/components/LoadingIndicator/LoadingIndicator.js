import React from 'react'
import { usePromiseTracker } from "react-promise-tracker";
import Loader from 'react-loader-spinner';

function LoadingIndicator(props) {
    const { promiseInProgress } = usePromiseTracker();
    let temp = usePromiseTracker();
    //console.log('LoadingIndicator', temp);
    return (
        <div>
            {
            props.infoText && promiseInProgress ? 
            <h4>{props.infoText}</h4>
            : null
            }

            {
                promiseInProgress ?
                    <div style={{ width: "100%", height: "100", display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <Loader type="ThreeDots" color={props.color} height="100" width="100" />
                    </div>
                    : null
            }
        </div>
    )
}

export default LoadingIndicator
