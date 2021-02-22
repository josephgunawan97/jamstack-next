
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import styles from '../styles/Company.module.css'
const Company = () => {
    return (
        <div className={styles.mainCompany}>
        <h1 className={styles.title}>
          Happy Customer
        </h1>

        <Row className={styles.grid}>
              <Col xs={2}>
                <img
                    className={styles.logoTask}
                    src="/assets/c1.png"
                ></img>
              </Col>
              <Col xs={2}>
                <img
                    className={styles.logoTask}
                    src="/assets/c2.png"
                ></img>
              </Col>
              <Col xs={2}>
                <img
                    className={styles.logoTask}
                    src="/assets/c3.png"
                ></img>
              </Col>
              <Col xs={2}>
                <img
                    className={styles.logoTask}
                    src="/assets/c4.png"
                ></img>
              </Col>
              <Col xs={2}>
                <img
                    className={styles.logoTask}
                    src="/assets/c5.png"
                ></img>
              </Col>
        </Row>
        </div>
    )
}

export default Company