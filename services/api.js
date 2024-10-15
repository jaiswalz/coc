const API_URL = 'http://localhost:8080/members'; // Replace with your backend URL

export const saveMemberData = async (data) => {
  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    return response;
  } catch (error) {
    console.error('Error saving member data:', error);
    throw error;
  }
};
