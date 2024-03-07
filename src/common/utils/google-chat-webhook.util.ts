import axios from 'axios';

interface ISendNotificationGoogleChat {
  title: string;
  content: string;
  url: string;
}

const NENE_IMAGE = 'https://quizne-media.s3.ap-southeast-1.amazonaws.com/images/nene-graduate.jpeg';

export const sendNotificationGoogleChat = async (data: ISendNotificationGoogleChat) => {
  try {
    const content = {
      cardsV2: [
        {
          cardId: 'unique-card-id',
          card: {
            header: {
              title: data.title,
              imageUrl: NENE_IMAGE,
              imageType: 'CIRCLE'
            },
            sections: [
              {
                collapsible: false,
                widgets: [
                  {
                    textParagraph: {
                      text: data.content
                    }
                  }
                ]
              }
            ]
          }
        }
      ]
    };

    if (data?.url) {
      await axios.post(data.url, content);
    }
  } catch {
    return null;
  }
};
