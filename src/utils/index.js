/* eslint-disable camelcase */
const mapDBToModel = ({ id, title, body, tags, createdAt, updatedAt }) => ({
  id,
  title,
  body,
  tags,
  created_at: createdAt,
  updated_at: updatedAt,
});

module.exports = { mapDBToModel };
