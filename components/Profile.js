
import Image from 'next/image'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import styles from '../styles/Profile.module.css'
import ProgressBar from 'react-bootstrap/ProgressBar'

const Profile = () => {
    return (
        <div className={styles.mainProfile}>
        <Row  className={styles.containerProfile}>
            <Col xs={12} md={6} lg={6} className={styles.colContainer}>
                <h1 className={styles.title}>
                About Me
                </h1>
                <Row>
                    <Col>
                    <p className={styles.descriptionTitle}>Name</p>
                    <p className={styles.description}>John Doe</p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                    <p className={styles.descriptionTitle}>Location</p>
                    <p className={styles.description}>Sometown, MI 55555</p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                    <p className={styles.descriptionTitle}>Contact</p>
                    <p className={styles.description}>(555) 555-5555</p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                    <p className={styles.descriptionTitle}>Email</p>
                    <p className={styles.description}>cw@somedomain.com</p>
                    </Col>
                </Row>
            </Col>

        
            <Col xs={12} md={6} lg={6} className={styles.colContainer}>
                <h1 className={styles.title}>
                My Skill
                </h1>
                <Row>
                    <Col>
                    <p className={styles.descriptionTitle}>Communication</p>
                    <div className={styles.progressBar}><ProgressBar now={80} /></div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                    <p className={styles.descriptionTitle}>Design Thinking</p>
                    <div className={styles.progressBar}><ProgressBar now={75} /></div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                    <p className={styles.descriptionTitle}>Technical Skill</p>
                    <div className={styles.progressBar}><ProgressBar now={90} /></div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                    <p className={styles.descriptionTitle}>Management</p>
                    <div className={styles.progressBar}><ProgressBar now={88} /></div>
                    </Col>
                </Row>
            </Col>
        </Row>
        </div>
    )
}

export default Profile