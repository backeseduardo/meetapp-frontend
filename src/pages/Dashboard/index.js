import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MdAddCircleOutline, MdChevronRight } from 'react-icons/md';

import api from '~/services/api';

import { Container, Meetup } from './styles';

export default function Dashboard() {
  const [meetups, setMeetups] = useState([]);

  useEffect(() => {
    async function loadMeetups() {
      const response = await api.get('/meetups', {
        params: {
          page: 1,
          date: '2019-08-01',
        },
      });

      setMeetups(response.data.rows);
    }

    loadMeetups();
  }, []);

  return (
    <Container>
      <header>
        <h1>Meus meetups</h1>
        <button type="button">
          <MdAddCircleOutline size={16} color="#fff" />
          Nova meetup
        </button>
      </header>

      <ul>
        {meetups.map(meetup => (
          <Meetup>
            <Link to="/">
              <strong>{meetup.description}</strong>
              <aside>
                <span>24 de junho, às 20h</span>
                <MdChevronRight size={24} color="#fff" />
              </aside>
            </Link>
          </Meetup>
        ))}
      </ul>
    </Container>
  );
}
