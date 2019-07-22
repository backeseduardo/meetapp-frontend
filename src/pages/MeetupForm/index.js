import React, { useState, useEffect } from 'react';
import { Form, Input } from '@rocketseat/unform';
import { MdAddCircleOutline } from 'react-icons/md';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import * as Yup from 'yup';

import api from '~/services/api';
import history from '~/services/history';

// import DatePicker from './DatePicker';
import Banner from './Banner';

import { Container } from './styles';

const schema = Yup.object().shape({
  id: Yup.string().notRequired(),
  banner_id: Yup.number().required('O meetup precisa de um banner'),
  title: Yup.string().required('Como se chama o meetup?'),
  description: Yup.string().required('Uma descrição seria bem-vinda'),
  date: Yup.date().required('Quando?'),
  location: Yup.string().required('Onde será o meetup?'),
});

export default function MeetupForm({ match }) {
  const { id } = match.params;

  const [meetup, setMeetup] = useState({});

  useEffect(() => {
    async function loadMeetup() {
      try {
        const response = await api.get(`/meetups/${id}`);

        setMeetup(response.data.rows[0]);
      } catch (err) {
        toast.error('Erro ao carregar meetup. Tente mais tarde.');
      }
    }

    loadMeetup();
  }, [id]);

  async function handleSubmit({
    title,
    description,
    date,
    location,
    banner_id,
  }) {
    try {
      if (id) {
        await api.put(`/meetups/${id}`, {
          title,
          description,
          date,
          location,
          banner_id,
        });

        toast.success('Meetup criado com successo');
      } else {
        await api.post('/meetups', {
          title,
          description,
          date,
          location,
          banner_id,
        });

        toast.success('Meetup criado com successo');
      }

      history.push('/dashboard');
    } catch (err) {
      toast.error('Erro, verifique os dados do meetup');
    }
  }

  return (
    <Container>
      <Form
        initialData={meetup}
        onSubmit={handleSubmit}
        schema={schema}
        noValidate
        autoComplete="off"
      >
        <Input type="hidden" name="id" />
        <Banner name="banner_id" />
        <Input name="title" placeholder="Título do meetup" />
        <Input multiline name="description" placeholder="Descrição completa" />
        {/* <DatePicker name="date" placeholder="Data do meetup" /> */}
        <Input type="date" name="date" placeholder="Data do meetup" />
        <Input name="location" placeholder="Localização" />

        <button type="submit">
          <MdAddCircleOutline size={16} color="#fff" />
          Salvar meetup
        </button>
      </Form>
    </Container>
  );
}

MeetupForm.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
};
