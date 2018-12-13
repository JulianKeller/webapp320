/*
 This function is used for the forms where currency input is added.
 It checks to ensure the user entered in the correct values.
*/
export function insert(doc) {
  const regex = /^[0-9]\d*(((,\d{3}){1})?(\.\d{2})?)$/;
  if (regex.test(doc.balance) && regex.test(doc.goal)) {
    return doc;
  }
  return false;
}
