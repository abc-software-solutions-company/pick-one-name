import {GetStaticProps} from 'next';
import dynamic from 'next/dynamic';
import {serverSideTranslations} from 'next-i18next/serverSideTranslations';
import {Controller, SubmitHandler, useForm} from 'react-hook-form';

const DynamicEditor = dynamic(() => import('@/components/ckeditor'), {ssr: false});

interface IFormInputs {
  desc: string;
}

export default function Demo() {
  const {handleSubmit, control} = useForm<IFormInputs>();
  const onSubmit: SubmitHandler<IFormInputs> = data => console.log(data);

  return (
    <>
      <h1>Description</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="desc"
          rules={{required: true}}
          control={control}
          render={({field}) => <DynamicEditor name="desc" value="" onChange={text => field.onChange(text)} />}
        />

        <input type="submit" />
      </form>

      <h1>Comment</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="desc"
          rules={{required: true}}
          control={control}
          render={({field}) => <DynamicEditor name="desc" value="" onChange={text => field.onChange(text)} />}
        />

        <input type="submit" />
      </form>
    </>
  );
}

export const getStaticProps: GetStaticProps = async ({locale}) => {
  return {
    props: {
      ...(await serverSideTranslations(locale!, ['common']))
    }
  };
};
