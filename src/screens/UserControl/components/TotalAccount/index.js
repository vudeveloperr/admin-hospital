import { Row, Col } from 'antd';

export default function TotalAccount(props) {
    return (
        <div>
            <div className="MuiPaper-root MuiPaper-elevation0 MuiCard-root jss2179 MuiPaper-rounded">
                <Row className="MuiCardContent-root jss414">
                    <Col span={8}>
                        <div className="MuiTypography-root jss2181 MuiTypography-subtitle1">Tài Khoản</div>
                        <div className="MuiTypography-root jss2180 MuiTypography-caption MuiTypography-colorTextSecondary">Hiện Tại</div>
                        <div className="MuiTypography-root jss2184 MuiTypography-h4 MuiTypography-colorTextPrimary">{props.totalacc}</div>
                    </Col>
                    
                    <Col className="jss418" span={8}>
                        <svg className="MuiSvgIcon-root jss2169 MuiSvgIcon-fontSizeInherit" focusable="false" viewBox="0 0 64 64" ariaHidden="true" role="presentation">
                            <path fillRule="evenodd" clipRule="evenodd" d="M43 13H16V51H43V45.5H41V49H18V15H41V33.5H43V13ZM40 43.9142L48.2071 35.7071L46.7928 34.2929L40 41.0858L36.7071 37.7929L35.2928 39.2071L40 43.9142ZM22 19H25V22H22V19ZM36 19H27V22H36V19ZM22 25H25V28H22V25ZM36 25H27V28H36V25ZM22 31H25V34H22V31ZM36 31H27V34H36V31Z" fill="#06847B"></path>
                        </svg>
                    </Col>
                </Row>
            </div>
        </div>
    )
}
