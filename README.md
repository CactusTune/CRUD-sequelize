# PHARMARCY ORDER API INTEGRATION

A TypeScript application for managing orders and integrating with external pharmacies. This application was built without any framework, and allows the creation of orders with products from different pharmacies.
## Cloning the repo

**NOTE:** Make sure you have Git installed on your system.

```bash
  # HTTPS
  $ git clone https://github.com/CactusTune/CRUD-sequelize.git
  # SSH
  git@github.com:CactusTune/CRUD-sequelize.git
  
  $ cd pharmacy-order-api
```

## Running locally - Manually with npm 

1. Clone this repository or download the source code.
2. Install the dependencies by running the following command: 
  ```bash
    $ npm install
  ```

3. Start the development server with the following command: 
 ```bash
    $ npm run dev
 ```

4. Start the main/production server with the following command
```bash
    $ npm run start
 ```

5. Run migrations with sequelize cli : 
```bash
    install cli
    $ npm install -g sequelize-cli
```

6. The command creates a new file in the migrations folder of your project. 
    example add age to user model:
```bash
    $ sequelize migration:generate --name add-age-to-user
```
7. Finally, apply the migration to update your database schema by running:
```bash
    $ sequelize db:migrate
```
8. Revert Migration with: 
```bash
    $ sequelize db:migrate:undo
```
 