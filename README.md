# Bookshelf-API

## Cloning Project

```txt
git clone https://github.com/IrvanAhmadP/Bookshelf-API.git
cd Bookshelf-API
```

## Install Dependencies

Menggunakan pnpm

```txt
pnpm i
```

Menggunakan yarn

```txt
yarn
```

Menggunakan npm

```txt
npm install
```

## Menjalankan Project

Menggunakan pnpm

```txt
pnpm start
```

Menggunakan yarn

```txt
yarn start
```

Menggunakan npm

```txt
npm run start
```

## Spesifikasi API

### Menyimpan Buku

`POST /books`

Body request:

```json
{
    "name": string,
    "year": number,
    "author": string,
    "summary": string,
    "publisher": string,
    "pageCount": number,
    "readPage": number,
    "reading": boolean
}
```

### Menampilkan Daftar Buku

`GET /books`

Query parameters:

- `name`: string (optional)
- `reading`: boolean (optional)
- `finished`: boolean (optional)

### Menampilkan Detail Buku

`GET /books/{bookId}`

### Mengubah Data Buku

`PUT /books/{bookId}`

Body request:

```json
{
    "name": string,
    "year": number,
    "author": string,
    "summary": string,
    "publisher": string,
    "pageCount": number,
    "readPage": number,
    "reading": boolean
}
```

### Menghapus Buku

`DELETE /books/{bookId}`
