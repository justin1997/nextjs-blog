import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';
import * as React from 'react';
import Paper from '@mui/material/Paper';

export async function getStaticProps() {
    const allPostsData = getSortedPostsData();
    return {
        props: {
            allPostsData,
        },
    };
}

export default function Home() {
    return (
        <Paper>
        <Layout home>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            
   
            <section className={utilStyles.headingMd}>
                <p> Full Stack Developer with 2+ years experience in technology and finance start-ups.
                    Love creating React apps, experimenting with PyTorch, and analyzing financial statements.
                </p>

                <p> Feel free to reach out! </p>
              
                </section>  
            
        </Layout>
        </Paper >
           
    );
}