import React, { useState, useEffect } from 'react';
import { MdAddCircleOutline } from 'react-icons/md';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import { parse } from 'date-fns';
import { Form, Input } from '@rocketseat/unform';
import ContentLoader from 'react-content-loader';
import * as Yup from 'yup';

import api from '~/services/api';
import history from '~/services/history';

import Banner from './Banner';
import DatePicker from './DatePicker';

import { Container } from './styles';

const schema = Yup.object().shape({
  banner_id: Yup.number().required('O meetup precisa de um banner'),
  title: Yup.string().required('Como se chama o meetup?'),
  description: Yup.string().required('Uma descrição seria bem-vinda'),
  date: Yup.date().required('Quando?'),
  location: Yup.string().required('Onde será o meetup?'),
});

export default function MeetupForm({ match }) {
  const { id } = match.params;

  const [loading, setLoading] = useState(true);
  const [meetup, setMeetup] = useState({});

  useEffect(() => {
    async function loadMeetup() {
      try {
        const response = await api.get(`/meetups/${id}`);

        const resMeetup = response.data.rows.map(row => ({
          ...row,
          date: parse(row.date),
        }));

        setMeetup(resMeetup[0]);
      } catch (err) {
        toast.error('Erro ao carregar meetup. Tente mais tarde.');
      } finally {
        setLoading(false);
      }
    }

    loadMeetup();
    // eslint-disable-next-line
  }, [id]);

  async function handleSubmit(data) {
    try {
      setLoading(true);

      if (id) {
        await api.put(`/meetups/${id}`, {
          title: data.title,
          description: data.description,
          date: data.date,
          location: data.location,
          banner_id: data.banner_id,
        });
        toast.success('Meetup criado com successo');
      } else {
        await api.post('/meetups', {
          title: data.title,
          description: data.description,
          date: data.date,
          location: data.location,
          banner_id: data.banner_id,
        });
        toast.success('Meetup criado com successo');
      }
      history.push('/dashboard');
    } catch (err) {
      toast.error('Erro, verifique os dados do meetup');
    } finally {
      setLoading(false);
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
          <rect x="0" y="0" rx="4" ry="4" width="400" height="50" />
          <rect x="0" y="60" rx="4" ry="4" width="400" height="25" />
          <rect x="0" y="95" rx="4" ry="4" width="400" height="25" />
        </ContentLoader>
      ) : (
        <Form
          initialData={meetup}
          onSubmit={handleSubmit}
          schema={schema}
          noValidate
          autoComplete="off"
        >
          <Banner name="banner_id" />
          <Input type="text" name="title" placeholder="Título do meetup" />
          <Input
            multiline
            name="description"
            placeholder="Descrição completa"
          />
          <DatePicker name="date" placeholder="Data" />
          <Input type="text" name="location" placeholder="Localização" />

          <button type="submit">
            <MdAddCircleOutline size={16} color="#fff" />
            Salvar meetup
          </button>
        </Form>
      )}
    </Container>
  );
}

MeetupForm.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};
