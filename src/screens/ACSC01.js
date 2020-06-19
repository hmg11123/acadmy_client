import React from 'react';
import Lub from '../components/Lnb';

class ACSC01 extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            dataList: [],
        };
    }

    componentDidMount = () => {
        setTimeout(() => {
            const arr = ['a', 'b', 'c'];
            this.setState({
                dataList: arr,
            });
        }, 2000);
    };
    render() {
        const { dataList } = this.state;

        return (
            <div className="ACSC01">
                <div className="ACSC01">
                    <Lub title="ABOUT" column="HOME > ABOUT" />
                </div>
                {dataList.length === 0 ? (
                    <div>데이터를 불러오는 중</div>
                ) : (
                    dataList.map((idx, data) => {
                        return (
                            <div>
                                {idx + 1}. {data}
                            </div>
                        );
                    })
                )}
            </div>
        );
    }
}

export default ACSC01;
