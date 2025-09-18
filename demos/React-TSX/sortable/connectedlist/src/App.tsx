import * as React from 'react';
import './App.css';
import JqxSortable, { ISortableProps } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxsortable';

const InnerItems = (props: any) => (
    <div>
        <table style={{ minWidth: 130 }}>
            <tbody>
                <tr>
                    <td style={{ width: 40 }} rowSpan={2}> <img height={50} width={40} src={props.imgurl} /> </td>
                    <td>{props.firstName} {props.lastName}</td>
                </tr>
                <tr>
                    <td>{props.title}</td>
                </tr>
            </tbody>
        </table>
    </div>
);

const firstNames = ['Nancy', 'Andrew', 'Janet', 'Margaret', 'Steven', 'Michael', 'Robert', 'Laura', 'Anne'];
const lastNames = ['Davolio', 'Fuller', 'Leverling', 'Peacock', 'Buchanan', 'Suyama', 'King', 'Callahan', 'Dodsworth'];
const titles = ['Sales Representative', 'Vice President, Sales', 'Sales Representative', 'Sales Representative', 'Sales Manager', 'Sales Representative', 'Sales Representative', 'Inside Sales Coordinator', 'Sales Representative'];
const firstNamesLength = firstNames.length;
const isValidFirstHalf = (index: number) => index < Math.floor(firstNamesLength / 2);
const isValidSecondHalf = (index: number) => index >= Math.floor(firstNamesLength / 2);

const SortableComponent = (props: any) => {
    const validation = (whichHalf: string, index: number) => {
        if (whichHalf === "A") {
            return isValidFirstHalf(index);
        } else {
            return isValidSecondHalf(index);
        }
    };
    return (
        <div>
            <span>Team {props.whichHalf}</span>
            <JqxSortable className={"sortable"} connectWith={props.connectWith} opacity={props.opacity}>
                {firstNames.map((firstName, i) =>
                    validation(props.whichHalf, i) ? (
                        <InnerItems
                            key={i}
                            index={i}
                            imgurl={`https://www.jqwidgets.com/react/images/${firstNames[i].toLowerCase()}.png`}
                            firstName={firstName}
                            lastName={lastNames[i]}
                            title={titles[i]}
                        />
                    ) : null
                )}
            </JqxSortable>
        </div>
    );
};

const App = () => {
    const [sortableProps] = React.useState<ISortableProps>({
        connectWith: ".sortable",
        opacity: 0.5,
    });

    return (
        <div>
            <div className={"sortable-container"}>
                <SortableComponent whichHalf={"A"} connectWith={sortableProps.connectWith} opacity={sortableProps.opacity} />
            </div>
            <div className={"sortable-container"}>
                <SortableComponent whichHalf={"B"} connectWith={sortableProps.connectWith} opacity={sortableProps.opacity} />
            </div>
        </div>
    );
};

export default App;