import { Button } from "@rneui/themed";
import { Link } from "expo-router";
import { PropsWithChildren } from "react";

interface Props extends PropsWithChildren {
    href: string
}

function LinkButton({ href, children }: Props) {

    return ( 
        <Link href={href} asChild>
            <Button>
                {children}
            </Button>
        </Link>
     );
}

export default LinkButton;