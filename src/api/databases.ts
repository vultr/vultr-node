/**
 * Methods for interacting with the databases endpoints<br>
 * {@link https://www.vultr.com/api/#tag/databases}
 * @namespace databases
 */

import { ApiEndpoint } from '../types'

/**
 * List Managed Database Plans.<br>
 * {@link https://www.vultr.com/api/#operation/list-database-plans}
 * @function listPlans
 * @memberof databases
 * @instance
 */
export const listPlans: ApiEndpoint = {
  url: '/databases/plans',
  requestType: 'GET',
  apiKeyRequired: true,
  parameters: {
    engine: { type: 'string' },
    nodes: { type: 'number' },
    region: { type: 'string' }
  }
}

/**
 * List all Managed Databases in your account.<br>
 * {@link https://www.vultr.com/api/#operation/list-databases}
 * @function listDatabases
 * @memberof databases
 * @instance
 */
export const listDatabases: ApiEndpoint = {
  url: '/databases',
  requestType: 'GET',
  apiKeyRequired: true,
  parameters: {
    label: { type: 'string' },
    tag: { type: 'string' },
    region: { type: 'string' }
  }
}

/**
 * Create a new Managed Database in your account.<br>
 * {@link https://www.vultr.com/api/#operation/create-database}
 * @function createDatabase
 * @memberof databases
 * @instance
 */
export const createDatabase: ApiEndpoint = {
  url: '/databases',
  requestType: 'POST',
  apiKeyRequired: true,
  parameters: {
    database_engine: {
      type: 'string',
      required: true
    },
    database_engine_version: {
      type: 'string',
      required: true
    },
    region: {
      type: 'string',
      required: true
    },
    plan: {
      type: 'string',
      required: true
    },
    label: {
      type: 'string',
      required: true
    },
    tag: { type: 'string' },
    maintenance_dow: { type: 'string' },
    maintenance_time: { type: 'string' },
    trusted_ips: { type: 'array' },
    mysql_sql_modes: { type: 'array' },
    mysql_require_primary_key: { type: 'boolean' },
    mysql_slow_query_log: { type: 'boolean' },
    mysql_long_query_time: { type: 'number' },
    redis_eviction_policy: { type: 'string' }
  }
}

/**
 * Get information about a Managed Database.<br>
 * {@link https://www.vultr.com/api/#operation/get-database}
 * @function getDatabase
 * @memberof databases
 * @instance
 */
export const getDatabase: ApiEndpoint = {
  url: '/databases/{database-id}',
  requestType: 'GET',
  apiKeyRequired: true,
  parameters: {
    'database-id': {
      type: 'string',
      path: true,
      required: true
    }
  }
}

/**
 * Update information for a Managed Database.
 * {@link https://www.vultr.com/api/#operation/update-database}
 * @function updateDatabase
 * @memberof databases
 * @instance
 */
export const updateDatabase: ApiEndpoint = {
  url: '/databases/{database-id}',
  requestType: 'PUT',
  apiKeyRequired: true,
  parameters: {
    'database-id': {
      type: 'string',
      path: true,
      required: true
    },
    region: { type: 'string' },
    plan: { type: 'string' },
    label: { type: 'string' },
    tag: { type: 'string' },
    maintenance_dow: { type: 'string' },
    maintenance_time: { type: 'string' },
    cluster_time_zone: { type: 'string' },
    trusted_ips: { type: 'array' },
    mysql_sql_modes: { type: 'array' },
    mysql_require_primary_key: { type: 'boolean' },
    mysql_slow_query_log: { type: 'boolean' },
    mysql_long_query_time: { type: 'number' },
    redis_eviction_policy: { type: 'string' }
  }
}

/**
 * Delete a Managed Database.<br>
 * {@link https://www.vultr.com/api/#operation/delete-database}
 * @function deleteDatabase
 * @memberof databases
 * @instance
 */
export const deleteDatabase: ApiEndpoint = {
  url: '/databases/{database-id}',
  requestType: 'DELETE',
  apiKeyRequired: true,
  parameters: {
    'database-id': {
      type: 'string',
      path: true,
      required: true
    }
  }
}

/**
 * List all database users within the Managed Database.<br>
 * {@link https://www.vultr.com/api/#operation/list-database-users}
 * @function listDatabaseUsers
 * @memberof databases
 * @instance
 */
export const listDatabaseUsers: ApiEndpoint = {
  url: '/databases/{database-id}/users',
  requestType: 'GET',
  apiKeyRequired: true,
  parameters: {
    'database-id': {
      type: 'string',
      path: true,
      required: true
    }
  }
}

/**
 * Create a new database user within the Managed Database.<br>
 * {@link https://www.vultr.com/api/#operation/create-database-user}
 * @function createDatabaseUser
 * @memberof databases
 * @instance
 */
export const createDatabaseUser: ApiEndpoint = {
  url: '/databases/{database-id}/users',
  requestType: 'POST',
  apiKeyRequired: true,
  parameters: {
    'database-id': {
      type: 'string',
      path: true,
      required: true
    },
    username: {
      type: 'string',
      required: true
    },
    password: { type: 'string' },
    encryption: { type: 'string' }
  }
}

/**
 * Get information about a Managed Database user.<br>
 * {@link https://www.vultr.com/api/#operation/get-database-user}
 * @function getDatabaseUser
 * @memberof databases
 * @instance
 */
export const getDatabaseUser: ApiEndpoint = {
  url: '/databases/{database-id}/users/{username}',
  requestType: 'GET',
  apiKeyRequired: true,
  parameters: {
    'database-id': {
      type: 'string',
      path: true,
      required: true
    },
    username: {
      type: 'string',
      path: true,
      required: true
    }
  }
}

/**
 * Update database user information within a Managed Database.<br>
 * {@link https://www.vultr.com/api/#operation/update-database-user}
 * @function updateDatabaseUser
 * @memberof databases
 * @instance
 */
export const updateDatabaseUser: ApiEndpoint = {
  url: '/databases/{database-id}/users/{username}',
  requestType: 'PUT',
  apiKeyRequired: true,
  parameters: {
    'database-id': {
      type: 'string',
      path: true,
      required: true
    },
    username: {
      type: 'string',
      path: true,
      required: true
    },
    password: {
      type: 'string',
      required: true
    }
  }
}

/**
 * Delete a database user within a Managed Database.<br>
 * {@link https://www.vultr.com/api/#operation/delete-database-user}
 * @function deleteDatabaseUser
 * @memberof databases
 * @instance
 */
export const deleteDatabaseUser: ApiEndpoint = {
  url: '/databases/{database-id}/users/{username}',
  requestType: 'DELETE',
  apiKeyRequired: true,
  parameters: {
    'database-id': {
      type: 'string',
      path: true,
      required: true
    },
    username: {
      type: 'string',
      path: true,
      required: true
    }
  }
}

/**
 * List all logical databases within the Managed Database (MySQL and PostgreSQL only).<br>
 * {@link https://www.vultr.com/api/#operation/list-database-dbs}
 * @function listDatabaseDbs
 * @memberof databases
 * @instance
 */
export const listDatabaseDbs: ApiEndpoint = {
  url: '/databases/{database-id}/dbs',
  requestType: 'GET',
  apiKeyRequired: true,
  parameters: {
    'database-id': {
      type: 'string',
      path: true,
      required: true
    }
  }
}

/**
 * Create a new logical database within the Managed Database (MySQL and PostgreSQL only).<br>
 * {@link https://www.vultr.com/api/#operation/create-database-db}
 * @function createDatabaseDb
 * @memberof databases
 * @instance
 */
export const createDatabaseDb: ApiEndpoint = {
  url: '/databases/{database-id}/dbs',
  requestType: 'POST',
  apiKeyRequired: true,
  parameters: {
    'database-id': {
      type: 'string',
      path: true,
      required: true
    },
    name: {
      type: 'string',
      required: true
    }
  }
}

/**
 * Get information about a logical database within a Managed Database (MySQL and PostgreSQL only).<br>
 * {@link https://www.vultr.com/api/#operation/get-database-db}
 * @function getDatabaseDb
 * @memberof databases
 * @instance
 */
export const getDatabaseDb: ApiEndpoint = {
  url: '/databases/{database-id}/dbs/{db-name}',
  requestType: 'GET',
  apiKeyRequired: true,
  parameters: {
    'database-id': {
      type: 'string',
      path: true,
      required: true
    },
    'db-name': {
      type: 'string',
      path: true,
      required: true
    }
  }
}

/**
 * Delete a logical database within a Managed Database (MySQL and PostgreSQL only).<br>
 * {@link https://www.vultr.com/api/#operation/delete-database-db}
 * @function deleteDatabaseDb
 * @memberof databases
 * @instance
 */
export const deleteDatabaseDb: ApiEndpoint = {
  url: '/databases/{database-id}/dbs/{db-name}',
  requestType: 'DELETE',
  apiKeyRequired: true,
  parameters: {
    'database-id': {
      type: 'string',
      path: true,
      required: true
    },
    'db-name': {
      type: 'string',
      path: true,
      required: true
    }
  }
}

/**
 * List all available version upgrades within the Managed Database.<br>
 * {@link https://www.vultr.com/api/#operation/list-maintenance-updates}
 * @function listMaintenanceUpdates
 * @memberof databases
 * @instance
 */
export const listMaintenanceUpdates: ApiEndpoint = {
  url: '/databases/{database-id}/maintenance',
  requestType: 'GET',
  apiKeyRequired: true,
  parameters: {
    'database-id': {
      type: 'string',
      path: true,
      required: true
    }
  }
}

/**
 * Start maintenance updates for the Managed Database.<br>
 * {@link https://www.vultr.com/api/#operation/start-maintenance-updates}
 * @function startMaintenanceUpdates
 * @memberof databases
 * @instance
 */
export const startMaintenanceUpdates: ApiEndpoint = {
  url: '/databases/{database-id}/maintenance',
  requestType: 'POST',
  apiKeyRequired: true,
  parameters: {
    'database-id': {
      type: 'string',
      path: true,
      required: true
    }
  }
}

/**
 * List service alert messages for the Managed Database.<br>
 * {@link https://www.vultr.com/api/#operation/list-service-alerts}
 * @function listServiceAlerts
 * @memberof databases
 * @instance
 */
export const listServiceAlerts: ApiEndpoint = {
  url: '/databases/{database-id}/alerts',
  requestType: 'POST',
  apiKeyRequired: true,
  parameters: {
    'database-id': {
      type: 'string',
      path: true,
      required: true
    },
    period: {
      type: 'string',
      required: true
    }
  }
}

/**
 * View the status of a migration attached to the Managed Database.<br>
 * {@link https://www.vultr.com/api/#operation/view-migration-status}
 * @function viewMigrationStatus
 * @memberof databases
 * @instance
 */
export const viewMigrationStatus: ApiEndpoint = {
  url: '/databases/{database-id}/migration',
  requestType: 'GET',
  apiKeyRequired: true,
  parameters: {
    'database-id': {
      type: 'string',
      path: true,
      required: true
    }
  }
}

/**
 * Start a migration to the Managed Database.<br>
 * {@link https://www.vultr.com/api/#operation/database-start-migration}
 * @function databaseStartMigration
 * @memberof databases
 * @instance
 */
export const databaseStartMigration: ApiEndpoint = {
  url: '/databases/{database-id}/migration',
  requestType: 'POST',
  apiKeyRequired: true,
  parameters: {
    'database-id': {
      type: 'string',
      path: true,
      required: true
    },
    host: {
      type: 'string',
      required: true
    },
    port: {
      type: 'number',
      required: true
    },
    username: {
      type: 'string',
      required: true
    },
    password: {
      type: 'string',
      required: true
    },
    database: {
      type: 'string'
    },
    ignored_databases: {
      type: 'string'
    },
    ssl: {
      type: 'boolean',
      required: true
    }
  }
}

/**
 * Detach a migration from the Managed Database.<br>
 * {@link https://www.vultr.com/api/#operation/database-detach-migration}
 * @function databaseDetachMigration
 * @memberof databases
 * @instance
 */
export const databaseDetachMigration: ApiEndpoint = {
  url: '/databases/{database-id}/migration',
  requestType: 'DELETE',
  apiKeyRequired: true,
  parameters: {
    'database-id': {
      type: 'string',
      path: true,
      required: true
    }
  }
}

/**
 * Create a read-only replica node for the Managed Database.<br>
 * {@link https://www.vultr.com/api/#operation/database-add-read-replica}
 * @function databaseAddReadReplica
 * @memberof databases
 * @instance
 */
export const databaseAddReadReplica: ApiEndpoint = {
  url: '/databases/{database-id}/read-replica',
  requestType: 'POST',
  apiKeyRequired: true,
  parameters: {
    'database-id': {
      type: 'string',
      path: true,
      required: true
    },
    region: {
      type: 'string',
      required: true
    },
    label: {
      type: 'string',
      required: true
    }
  }
}

/**
 * Get backup information for the Managed Database.<br>
 * {@link https://www.vultr.com/api/#operation/get-backup-information}
 * @function getBackupInformation
 * @memberof databases
 * @instance
 */
export const getBackupInformation: ApiEndpoint = {
  url: '/databases/{database-id}/backups',
  requestType: 'GET',
  apiKeyRequired: true,
  parameters: {
    'database-id': {
      type: 'string',
      path: true,
      required: true
    }
  }
}

/**
 * Create a new Managed Database from a backup.<br>
 * {@link https://www.vultr.com/api/#operation/database-restore-from-backup}
 * @function databaseRestoreFromBackup
 * @memberof databases
 * @instance
 */
export const databaseRestoreFromBackup: ApiEndpoint = {
  url: '/databases/{database-id}/restore',
  requestType: 'POST',
  apiKeyRequired: true,
  parameters: {
    'database-id': {
      type: 'string',
      path: true,
      required: true
    },
    label: {
      type: 'string',
      required: true
    },
    type: { type: 'string' },
    date: { type: 'string' },
    time: { type: 'string' }
  }
}

/**
 * Fork a Managed Database to a new subscription from a backup.<br>
 * {@link https://www.vultr.com/api/#operation/database-fork}
 * @function databaseFork
 * @memberof databases
 * @instance
 */
export const databaseFork: ApiEndpoint = {
  url: '/databases/{database-id}/fork',
  requestType: 'POST',
  apiKeyRequired: true,
  parameters: {
    'database-id': {
      type: 'string',
      path: true,
      required: true
    },
    label: {
      type: 'string',
      required: true
    },
    region: {
      type: 'string',
      required: true
    },
    plan: {
      type: 'string',
      required: true
    },
    type: { type: 'string' },
    date: { type: 'string' },
    time: { type: 'string' }
  }
}

/**
 * List all connection pools within the Managed Database (PostgreSQL engine types only).<br>
 * {@link https://www.vultr.com/api/#operation/list-connection-pools}
 * @function listConnectionPools
 * @memberof databases
 * @instance
 */
export const listConnectionPools: ApiEndpoint = {
  url: '/databases/{database-id}/connection-pools',
  requestType: 'GET',
  apiKeyRequired: true,
  parameters: {
    'database-id': {
      type: 'string',
      path: true,
      required: true
    }
  }
}

/**
 * Create a new connection pool within the Managed Database (PostgreSQL engine types only).<br>
 * {@link https://www.vultr.com/api/#operation/create-connection-pool}
 * @function createConnectionPool
 * @memberof databases
 * @instance
 */
export const createConnectionPool: ApiEndpoint = {
  url: '/databases/{database-id}/connection-pools',
  requestType: 'POST',
  apiKeyRequired: true,
  parameters: {
    'database-id': {
      type: 'string',
      path: true,
      required: true
    },
    name: {
      type: 'string',
      required: true
    },
    database: {
      type: 'string',
      required: true
    },
    username: {
      type: 'string',
      required: true
    },
    mode: {
      type: 'string',
      required: true
    },
    size: {
      type: 'number',
      required: true
    }
  }
}

/**
 * Get information about a Managed Database connection pool (PostgreSQL engine types only).<br>
 * {@link https://www.vultr.com/api/#operation/get-connection-pool}
 * @function getConnectionPool
 * @memberof databases
 * @instance
 */
export const getConnectionPool: ApiEndpoint = {
  url: '/databases/{database-id}/connection-pools/{pool-name}',
  requestType: 'GET',
  apiKeyRequired: true,
  parameters: {
    'database-id': {
      type: 'string',
      path: true,
      required: true
    },
    'pool-name': {
      type: 'string',
      path: true,
      required: true
    }
  }
}

/**
 * Update connection-pool information within a Managed Database (PostgreSQL engine types only).<br>
 * {@link https://www.vultr.com/api/#operation/update-connection-pool}
 * @function updateConnectionPool
 * @memberof databases
 * @instance
 */
export const updateConnectionPool: ApiEndpoint = {
  url: '/databases/{database-id}/connection-pools/{pool-name}',
  requestType: 'PUT',
  apiKeyRequired: true,
  parameters: {
    'database-id': {
      type: 'string',
      path: true,
      required: true
    },
    'pool-name': {
      type: 'string',
      path: true,
      required: true
    },
    database: { type: 'string' },
    username: { type: 'string' },
    mode: { type: 'string' },
    size: { type: 'number' }
  }
}

/**
 * Delete a connection pool within a Managed Database (PostgreSQL engine types only).<br>
 * {@link https://www.vultr.com/api/#operation/delete-connection-pool}
 * @function deleteConnectionPool
 * @memberof databases
 * @instance
 */
export const deleteConnectionPool: ApiEndpoint = {
  url: '/databases/{database-id}/connection-pools/{pool-name}',
  requestType: 'DELETE',
  apiKeyRequired: true,
  parameters: {
    'database-id': {
      type: 'string',
      path: true,
      required: true
    },
    'pool-name': {
      type: 'string',
      path: true,
      required: true
    }
  }
}

/**
 * List all configured and available advanced options for the Managed Database (PostgreSQL engine types only).<br>
 * {@link https://www.vultr.com/api/#operation/list-advanced-options}
 * @function listAdvancedOptions
 * @memberof databases
 * @instance
 */
export const listAdvancedOptions: ApiEndpoint = {
  url: '/databases/{database-id}/advanced-options',
  requestType: 'GET',
  apiKeyRequired: true,
  parameters: {
    'database-id': {
      type: 'string',
      path: true,
      required: true
    }
  }
}

/**
 * Updates an advanced configuration option for the Managed Database (PostgreSQL engine types only).<br>
 * {@link https://www.vultr.com/api/#operation/update-advanced-options}
 * @function updateAdvancedOptions
 * @memberof databases
 * @instance
 */
export const updateAdvancedOptions: ApiEndpoint = {
  url: '/databases/{database-id}/advanced-options',
  requestType: 'PUT',
  apiKeyRequired: true,
  parameters: {
    'database-id': {
      type: 'string',
      path: true,
      required: true
    },
    autovacuum_analyze_scale_factor: { type: 'float' },
    autovacuum_analyze_threshold: { type: 'number' },
    autovacuum_freeze_max_age: { type: 'number' },
    autovacuum_max_workers: { type: 'number' },
    autovacuum_naptime: { type: 'number' },
    autovacuum_vacuum_cost_delay: { type: 'number' },
    autovacuum_vacuum_cost_limit: { type: 'number' },
    autovacuum_vacuum_scale_factor: { type: 'number' },
    autovacuum_vacuum_threshold: { type: 'number' },
    bgwriter_delay: { type: 'number' },
    bgwriter_flush_after: { type: 'number' },
    bgwriter_lru_maxpages: { type: 'number' },
    bgwriter_lru_multiplier: { type: 'number' },
    deadlock_timeout: { type: 'number' },
    default_toast_compression: { type: 'string' },
    idle_in_transaction_session_timeout: { type: 'number' },
    jit: { type: 'boolean' },
    log_autovacuum_min_duration: { type: 'number' },
    log_error_verbosity: { type: 'string' },
    log_line_prefix: { type: 'string' },
    log_min_duration_statement: { type: 'number' },
    max_files_per_process: { type: 'number' },
    max_locks_per_transaction: { type: 'number' },
    max_logical_replication_workers: { type: 'number' },
    max_parallel_workers: { type: 'number' },
    max_parallel_workers_per_gather: { type: 'number' },
    max_pred_locks_per_transaction: { type: 'number' },
    max_prepared_transactions: { type: 'number' },
    max_replication_slots: { type: 'number' },
    max_stack_depth: { type: 'number' },
    max_standby_archive_delay: { type: 'number' },
    max_standby_streaming_delay: { type: 'number' },
    max_wal_senders: { type: 'number' },
    max_worker_processes: { type: 'number' },
    'pg_partman_bgw.interval': { type: 'number' },
    'pg_partman_bgw.role': { type: 'string' },
    'pg_stat_statements.track': { type: 'string' },
    temp_file_limit: { type: 'number' },
    track_activity_query_size: { type: 'number' },
    track_commit_timestamp: { type: 'string' },
    track_functions: { type: 'string' },
    track_io_timing: { type: 'string' },
    wal_sender_timeout: { type: 'number' },
    wal_writer_delay: { type: 'number' }
  }
}

/**
 * List all available version upgrades within the Managed Database (PostgreSQL engine types only).<br>
 * {@link https://www.vultr.com/api/#operation/list-available-versions}
 * @function listAvailableVersions
 * @memberof databases
 * @instance
 */
export const listAvailableVersions: ApiEndpoint = {
  url: '/databases/{database-id}/version-upgrade',
  requestType: 'GET',
  apiKeyRequired: true,
  parameters: {
    'database-id': {
      type: 'string',
      path: true,
      required: true
    }
  }
}

/**
 * Start a version upgrade for the Managed Database (PostgreSQL engine types only).<br>
 * {@link https://www.vultr.com/api/#operation/start-version-upgrade}
 * @function startVersionUpgrade
 * @memberof databases
 * @instance
 */
export const startVersionUpgrade: ApiEndpoint = {
  url: '/databases/{database-id}/version-upgrade',
  requestType: 'POST',
  apiKeyRequired: true,
  parameters: {
    'database-id': {
      type: 'string',
      path: true,
      required: true
    },
    version: {
      type: 'string',
      required: true
    }
  }
}
