'use server'; // Server Action

// HTML仕様に準拠したフォーム送信
export async function handleSubmitHTML(formData:FormData) {
  const name = formData.get('name');
  console.log(`HTML Form submitted: ${name}`);
}
