import React from 'react'
import { Heading } from './Heading'

let idx = 0;
const contents = [
    `Curabitur nec leo arcu. In laoreet nisl vitae condimentum rhoncus. Nullam fringilla nulla non nisi vestibulum tincidunt. Aliquam erat volutpat. Curabitur dictum ligula ullamcorper dui consectetur, sed elementum risus dictum. Donec finibus, nibh ac lacinia consequat, est leo tincidunt leo, a pharetra ligula libero a est. Nam purus nisi, feugiat in felis eget, condimentum ultrices urna. Mauris pretium ut est nec consequat. Etiam eu ultrices ligula. Maecenas malesuada, ex vel pretium posuere, orci nisl elementum odio, at sodales risus enim at neque. Integer non nibh nisi. Duis placerat nisl id lectus pulvinar, sed posuere felis consectetur. Aenean laoreet pellentesque tortor, mollis convallis libero elementum vel. Cras non mollis mauris. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Etiam interdum sed massa vel tincidunt.`,
    `Fusce quis laoreet orci. Morbi mollis, ante ut rhoncus interdum, est velit egestas purus, nec facilisis eros sem ut elit. Duis varius ex vitae iaculis tempus. Nullam rutrum, nunc non faucibus mattis, nulla nisi fermentum dolor, eget volutpat justo est at velit. Sed interdum tristique urna, nec pulvinar metus sodales nec. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer id mauris volutpat, maximus tellus ac, posuere libero. Cras eget pharetra eros. Etiam dictum odio sit amet libero posuere, non suscipit augue auctor. Vivamus aliquet vel urna sit amet euismod. Sed facilisis ante felis, sit amet blandit diam rutrum et. Donec elit sem, mollis et viverra nec, tempor ut felis.`,
    `Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.`,
]
const getContent = () => contents[(idx++) % 3];

export const Page = ({ title }) => {
    return (
        <div>
            <Heading>
                <h1>{title}</h1>
            </Heading>
            <div>
                <p>{getContent()}</p>
            </div>
        </div>
    )
}