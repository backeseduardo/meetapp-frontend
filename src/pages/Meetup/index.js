import React, { useState, useEffect } from 'react';
import { MdEdit, MdDeleteForever } from 'react-icons/md';
import ContentLoader from 'react-content-loader';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';

import api from '~/services/api';
import history from '~/services/history';

import { Container, Content } from './styles';

export default function Meetup({ match }) {
  const { id } = match.params;

  const [loading, setLoading] = useState(true);
  const [meetup, setMeetup] = useState({});

  useEffect(() => {
    async function loadMeetup() {
      try {
        const response = await api.get(`/meetups/${id}`);

        setMeetup(response.data.rows[0]);
      } catch (err) {
        toast.error('Erro ao carregar meetup. Tente mais tarde.');
      } finally {
        setLoading(false);
      }
    }

    loadMeetup();
  }, [id]);

  return (
    <Container>
      {loading ? (
        <ContentLoader
          speed={2}
          primaryColor="#d9d9d9"
          secondaryColor="#b2abab"
        >
          <rect x="0" y="0" rx="4" ry="4" width="150" height="25" />
          <rect x="250" y="0" rx="4" ry="4" width="70" height="25" />
          <rect x="330" y="0" rx="4" ry="4" width="70" height="25" />

          <rect x="0" y="40" rx="4" ry="4" width="400" height="70" />
        </ContentLoader>
      ) : (
        <>
          <header>
            <h1>{meetup.title}</h1>

            <aside>
              <button
                type="button"
                className="edit"
                onClick={() => history.push(`/meetup/form/${meetup.id}`)}
              >
                <MdEdit size={16} color="#fff" />
                Editar
              </button>

              <button type="button" className="cancel">
                <MdDeleteForever size={16} color="#fff" />
                Cancelar
              </button>
            </aside>
          </header>

          <Content>
            <img src={meetup.banner ? meetup.banner.url : null} alt="Banner" />

            <p>{meetup.description}</p>

            <footer>
              <span>24 de julho, às 20h</span>
              <span>{meetup.location}</span>
            </footer>
          </Content>
        </>
      )}
    </Container>
  );
}

Meetup.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
};
