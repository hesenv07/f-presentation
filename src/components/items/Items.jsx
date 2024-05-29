import { Container, List } from "common";
import { Card } from "./ui";
import { items } from "./consts";

const Items = () => {
    return (
        <Container href={'/'} title='Featured'>
            <List>
               {items.map((item) => (
                    <Card key={item.id} data={item} />
                ))}
            </List>
        </Container>
    )
}

export default Items;