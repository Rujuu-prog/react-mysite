import { AnyNsRecord } from "dns";


export const TestButton = (props:any) => {
    const {name} = props;
    return(
        <div>
            <p>{name}</p>
        </div>
    );
}
