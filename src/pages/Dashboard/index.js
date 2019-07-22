import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MdAddCircleOutline, MdChevronRight } from 'react-icons/md';
import ContentLoader from 'react-content-loader';
import { toast } from 'react-toastify';

import api from '~/services/api';
import history from '~/services/history';

import { Container, Meetup } from './styles';

export default function Dashboard() {
  const [loading, setLoading] = useState(true);
  const [meetups, setMeetups] = useState([]);

  useEffect(() => {
    async function loadMeetups() {
      try {
        const response = await api.get('/meetups');

        setMeetups(response.data.rows);
      } catch (err) {
        toast.error('Erro ao carregar meetups. Tente mais tarde.');
      } finally {
        setLoading(false);
      }
    }

    loadMeetups();
  }, []);

  return (
    <Container>
      {loading ? (
        <ContentLoader
          speed={2}
          primaryColor="#d9d9d9"
          secondaryColor="#b2abab"
        >
          <rect x="0" y="0" rx="4" ry="4" width="150" height="25" />
          <rect x="330" y="0" rx="4" ry="4" width="70" height="25" />

          <rect x="0" y="40" rx="4" ry="4" width="400" height="25" />
          <rect x="0" y="75" rx="4" ry="4" width="400" height="25" />
        </ContentLoader>
      ) : (
        <>
          <header>
            <h1>Meus meetups</h1>
            <button type="button" onClick={() => history.push('/meetup/form')}>
              <MdAddCircleOutline size={16} color="#fff" />
              Nova meetup
            </button>
          </header>

          <ul>
            {meetups.map(meetup => (
              <Meetup key={meetup.id}>
                <Link to={`/meetup/${meetup.id}`}>
                  <strong>{meetup.description}</strong>
                  <aside>
                    <span>24 de junho, às 20h</span>
                    <MdChevronRight size={24} color="#fff" />
                  </aside>
                </Link>
              </Meetup>
            ))}
          </ul>
        </>
      )}
    </Container>
  );
}
