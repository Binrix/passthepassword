import { Card } from "@rneui/themed";
import { Children, ReactElement, ReactPortal } from "react";
import { View } from "react-native";

function FormWrapper({ children }: React.PropsWithChildren) {
    return ( 
        <>
            <View style={{position: "relative", alignItems: "center"}}>
                {children}
            </View>
        </>
     );
}

export default FormWrapper;