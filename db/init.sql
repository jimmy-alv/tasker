SELECT 'CREATE DATABASE tasker'
WHERE NOT EXISTS (SELECT FROM pg_database WHERE datname='tasker')\gexec