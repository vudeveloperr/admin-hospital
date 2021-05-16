import { Row, Col } from 'antd';

export default function TotalRevenueToday(props) {
    return (
        <div>
            <div className="MuiPaper-root MuiPaper-elevation0 MuiCard-root jss414 MuiPaper-rounded">
                <Row className="MuiCardContent-root jss414">
                    <Col span={8}>
                        <div className="MuiTypography-root jss555 MuiTypography-subtitle1">Sales</div>
                        <div className="MuiTypography-root jss554 MuiTypography-caption MuiTypography-colorTextSecondary">Today</div>
                        <div className="MuiTypography-root jss558 MuiTypography-h4 MuiTypography-colorTextPrimary">$ {props.totalrevenu}</div>
                    </Col>
                    <Col className="jss418" span={8}>
                        <svg className="MuiSvgIcon-root jss543 MuiSvgIcon-fontSizeInherit" focusable="false" viewBox="0 0 64 64" ariaHidden="true" role="presentation">
                            <path fillRule="evenodd" clipRule="evenodd" d="M40.1974 14H49.7682V22.7732L45.9287 19.2537L35.0969 30.0855L25.1555 28.0973L15.5364 39.6402L14 38.3598L24.3809 25.9027L34.4395 27.9145L44.453 17.901L40.1974 14ZM21.2682 44H17.2682V49H21.2682V44ZM15.2682 42V51H23.2682V42H15.2682ZM26.2682 34H30.2682V49H26.2682V34ZM24.2682 51V32H32.2682V51H24.2682ZM39.2682 37H35.2682V49H39.2682V37ZM33.2682 35V51H41.2682V35H33.2682ZM44.2682 28H48.2682V49H44.2682V28ZM42.2682 51V26H50.2682V51H42.2682Z" fill="#06847B"></path>
                        </svg>
                    </Col>
                </Row>
            </div>
        </div>
    )
}
