import React, { useState, useEffect } from 'react';
import { MdEdit, MdDeleteForever } from 'react-icons/md';
import ContentLoader from 'react-content-loader';
import PropTypes from 'prop-types';
import { format, parse } from 'date-fns';
import pt from 'date-fns/locale/pt';
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

        setMeetup(
          response.data.rows.map(row => ({
            ...row,
            dateFormatted: format(
              parse(row.date),
              'd [de] MMMM [às] H [horas]',
              {
                locale: pt,
              }
            ),
          }))[0]
        );
      } catch (err) {
        toast.error('Erro ao carregar meetup. Tente mais tarde.');
      } finally {
        setLoading(false);
      }
    }

    loadMeetup();
  }, [id]);

  async function handleCancel(meetupId) {
    try {
      await api.delete(`/meetups/${meetupId}`);

      toast.success('Meetup cancelado');

      history.push('/dashboard');
    } catch (err) {
      toast.error('Erro. Tente novamento.');
    }
  }

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

              <button
                type="button"
                className="cancel"
                onClick={() => handleCancel(meetup.id)}
              >
                <MdDeleteForever size={16} color="#fff" />
                Cancelar
              </button>
            </aside>
          </header>

          <Content>
            <img src={meetup.banner ? meetup.banner.url : null} alt="Banner" />

            <p>{meetup.description}</p>

            <footer>
              <span>{meetup.dateFormatted}</span>
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
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};
