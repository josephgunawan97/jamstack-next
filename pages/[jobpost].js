import axios from "axios";
import Link from "next/link";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import styles from '../styles/Layout.module.css'
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const Jobpost = ({ jobpost, posts }) => {
  return (
    <div className={styles.container2}>
      <h1>{jobpost}</h1>
      <div  className={styles.description}>
        <p>
          {posts}
        </p>
      </div>
      <Row className={styles.grid}>
              <Col xs={2}>
                <img
                    className={styles.logoTask2}
                    src="https://picsum.photos/400"
                ></img>
              </Col>
              <Col xs={2}>
                <img
                    className={styles.logoTask2}
                    src="https://picsum.photos/600"
                ></img>
              </Col>
              <Col xs={2}>
                <img
                    className={styles.logoTask2}
                    src="https://picsum.photos/700"
                ></img>
              </Col>
              <Col xs={2}>
                <img
                    className={styles.logoTask2}
                    src="https://picsum.photos/800"
                ></img>
              </Col>
              <Col xs={2}>
                <img
                    className={styles.logoTask2}
                    src="https://picsum.photos/900"
                ></img>
              </Col>
        </Row>
    </div>
  );
};

export default Jobpost;

export async function getStaticPaths() {
  const paths = [
    { params: { jobpost: "digital-marketing" } },
    { params: { jobpost: "ux-research"} },
    { params: { jobpost: "data-analyst"} }
  ];

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const jobpost = params.jobpost.toString().toUpperCase().replace('-', ' ');
  const response = await axios.get(
    `https://randommer.io/api/Text/LoremIpsum?loremType=business&type=paragraphs&number=1`, 
    {
      'X-API-KEY': '387c04f642bd418cb06260f6710e096c'
    }
  );
  const posts = response.status == 200 ? response.data.split('<br>') : '';
  // console.log(posts)
  return {
    props: { jobpost, posts },
  };
}