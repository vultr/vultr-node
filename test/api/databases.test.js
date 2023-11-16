const util = require('../util')

const mockParameters = {
  createDatabase: {
    database_engine: 'mysql',
    database_engine_version: '8',
    region: 'ewr',
    plan: 'vultr-dbaas-hobbyist-cc-1-25-1',
    label: 'Example Managed Database'
  },
  getDatabase: {
    'database-id': '999c4ed0-f2e4-4f2a-a951-de358ceb9ab5'
  },
  updateDatabase: {
    'database-id': '999c4ed0-f2e4-4f2a-a951-de358ceb9ab5',
    plan: 'vultr-dbaas-startup-cc-1-55-2',
    label: 'Example Managed Database'
  },
  deleteDatabase: {
    'database-id': '999c4ed0-f2e4-4f2a-a951-de358ceb9ab5'
  },
  usage: {
    'database-id': '999c4ed0-f2e4-4f2a-a951-de358ceb9ab5'
  },
  listDatabaseUsers: {
    'database-id': '999c4ed0-f2e4-4f2a-a951-de358ceb9ab5'
  },
  createDatabaseUser: {
    'database-id': '999c4ed0-f2e4-4f2a-a951-de358ceb9ab5',
    username: 'some_new_user',
    password: 'some_secure_password',
    encryption: 'caching_sha2_password'
  },
  getDatabaseUser: {
    'database-id': '999c4ed0-f2e4-4f2a-a951-de358ceb9ab5',
    username: 'some_username'
  },
  updateDatabaseUser: {
    'database-id': '999c4ed0-f2e4-4f2a-a951-de358ceb9ab5',
    username: 'some_username',
    password: 'some_new_password_here'
  },
  deleteDatabaseUser: {
    'database-id': '999c4ed0-f2e4-4f2a-a951-de358ceb9ab5',
    username: 'some_username'
  },
  listDatabaseDbs: {
    'database-id': '999c4ed0-f2e4-4f2a-a951-de358ceb9ab5'
  },
  createDatabaseDb: {
    'database-id': '999c4ed0-f2e4-4f2a-a951-de358ceb9ab5',
    name: 'new_db_name'
  },
  getDatabaseDb: {
    'database-id': '999c4ed0-f2e4-4f2a-a951-de358ceb9ab5',
    'db-name': 'new_db_name'
  },
  deleteDatabaseDb: {
    'database-id': '999c4ed0-f2e4-4f2a-a951-de358ceb9ab5',
    'db-name': 'new_db_name'
  },
  listMaintenanceUpdates: {
    'database-id': '999c4ed0-f2e4-4f2a-a951-de358ceb9ab5'
  },
  startMaintenanceUpdates: {
    'database-id': '999c4ed0-f2e4-4f2a-a951-de358ceb9ab5'
  },
  listServiceAlerts: {
    'database-id': '999c4ed0-f2e4-4f2a-a951-de358ceb9ab5',
    period: 'day'
  },
  viewMigrationStatus: {
    'database-id': '999c4ed0-f2e4-4f2a-a951-de358ceb9ab5'
  },
  databaseStartMigration: {
    'database-id': '999c4ed0-f2e4-4f2a-a951-de358ceb9ab5',
    host: 'some_host',
    port: 3306,
    username: 'some_username',
    password: 'some_password',
    database: 'some_database',
    ignored_databases: '',
    ssl: true
  },
  databaseDetachMigration: {
    'database-id': '999c4ed0-f2e4-4f2a-a951-de358ceb9ab5'
  },
  databaseAddReadReplica: {
    'database-id': '999c4ed0-f2e4-4f2a-a951-de358ceb9ab5',
    region: 'ewr',
    label: 'new_read_replica_label'
  },
  databasePromoteReadReplica: {
    'database-id': '999c4ed0-f2e4-4f2a-a951-de358ceb9ab5'
  },
  getBackupInformation: {
    'database-id': '999c4ed0-f2e4-4f2a-a951-de358ceb9ab5'
  },
  databaseRestoreFromBackup: {
    'database-id': '999c4ed0-f2e4-4f2a-a951-de358ceb9ab5',
    label: 'new_restore_label',
    type: 'pitr',
    date: '2023-02-06',
    time: '08:00:00'
  },
  databaseFork: {
    'database-id': '999c4ed0-f2e4-4f2a-a951-de358ceb9ab5',
    label: 'new_fork_label',
    region: 'sea',
    plan: 'vultr-dbaas-startup-cc-2-80-4',
    type: 'pitr',
    date: '2023-02-06',
    time: '08:00:00'
  },
  listConnectionPools: {
    'database-id': '999c4ed0-f2e4-4f2a-a951-de358ceb9ab5'
  },
  createConnectionPool: {
    'database-id': '999c4ed0-f2e4-4f2a-a951-de358ceb9ab5',
    name: 'new_connection_pool',
    database: 'some_database',
    username: 'some_user',
    mode: 'transaction',
    size: 5
  },
  getConnectionPool: {
    'database-id': '999c4ed0-f2e4-4f2a-a951-de358ceb9ab5',
    'pool-name': 'new_connection_pool'
  },
  updateConnectionPool: {
    'database-id': '999c4ed0-f2e4-4f2a-a951-de358ceb9ab5',
    'pool-name': 'new_connection_pool',
    mode: 'session'
  },
  deleteConnectionPool: {
    'database-id': '999c4ed0-f2e4-4f2a-a951-de358ceb9ab5',
    'pool-name': 'new_connection_pool'
  },
  listAdvancedOptions: {
    'database-id': '999c4ed0-f2e4-4f2a-a951-de358ceb9ab5'
  },
  updateAdvancedOptions: {
    'database-id': '999c4ed0-f2e4-4f2a-a951-de358ceb9ab5',
    jit: false,
    temp_file_limit: 10000,
    track_io_timing: 'off'
  },
  listAvailableVersions: {
    'database-id': '999c4ed0-f2e4-4f2a-a951-de358ceb9ab5'
  },
  startVersionUpgrade: {
    'database-id': '999c4ed0-f2e4-4f2a-a951-de358ceb9ab5',
    version: '15'
  }
}

const mockResponses = {
  listPlans: {
    plans: [
      {
        id: 'vultr-dbaas-hobbyist-cc-1-25-1',
        number_of_nodes: 1,
        type: 'vc2',
        vcpu_count: 1,
        ram: 1024,
        disk: 25,
        monthly_cost: 15,
        supported_engines: {
          mysql: true,
          pg: true,
          redis: false
        },
        max_connections: {
          mysql: 75,
          pg: 22
        },
        locations: ['DEV', 'ICN', 'SEA']
      }
    ]
  },
  listDatabases: {
    databases: [
      {
        id: '999c4ed0-f2e4-4f2a-a951-de358ceb9ab5',
        date_created: '2022-05-09 10:13:31',
        plan: 'vultr-dbaas-hobbyist-cc-1-25-1',
        plan_disk: 25,
        plan_ram: 1024,
        plan_vcpus: 1,
        plan_replicas: 0,
        region: 'EWR',
        status: 'Running',
        label: 'some label',
        tag: 'some tag',
        database_engine: 'mysql',
        database_engine_version: 8,
        dbname: 'defaultdb',
        host: 'HOSTNAME_GOES_HERE',
        user: 'vultradmin',
        password: 'PASSWORD_GOES_HERE',
        port: 16751,
        maintenance_dow: 'sunday',
        maintenance_time: '06:00:00',
        latest_backup: '2022-11-02 12:58:18"',
        trusted_ips: ['...'],
        mysql_sql_modes: [
          'ANSI',
          'ERROR_FOR_DIVISION_BY_ZERO',
          'NO_ENGINE_SUBSTITUTION',
          'NO_ZERO_DATE',
          'NO_ZERO_IN_DATE',
          'STRICT_ALL_TABLES'
        ],
        mysql_require_primary_key: true,
        mysql_slow_query_log: false,
        cluster_time_zone: 'America/New_York',
        read_replicas: ['...']
      }
    ],
    meta: {
      total: 1
    }
  },
  createDatabase: {
    database: {
      id: '999c4ed0-f2e4-4f2a-a951-de358ceb9ab5',
      date_created: '2022-05-09 10:13:31',
      plan: 'vultr-dbaas-hobbyist-cc-1-25-1',
      plan_disk: 25,
      plan_ram: 1024,
      plan_vcpus: 1,
      plan_replicas: 0,
      region: 'EWR',
      status: 'Running',
      label: 'some label',
      tag: 'some tag',
      database_engine: 'mysql',
      database_engine_version: 8,
      dbname: 'defaultdb',
      host: 'HOSTNAME_GOES_HERE',
      user: 'vultradmin',
      password: 'PASSWORD_GOES_HERE',
      port: 16751,
      maintenance_dow: 'sunday',
      maintenance_time: '06:00:00',
      latest_backup: '2022-11-02 12:58:18"',
      trusted_ips: ['...'],
      mysql_sql_modes: [
        'ANSI',
        'ERROR_FOR_DIVISION_BY_ZERO',
        'NO_ENGINE_SUBSTITUTION',
        'NO_ZERO_DATE',
        'NO_ZERO_IN_DATE',
        'STRICT_ALL_TABLES'
      ],
      mysql_require_primary_key: true,
      mysql_slow_query_log: false,
      cluster_time_zone: 'America/New_York',
      read_replicas: ['...']
    }
  },
  getDatabase: {
    database: {
      id: '999c4ed0-f2e4-4f2a-a951-de358ceb9ab5',
      date_created: '2022-05-09 10:13:31',
      plan: 'vultr-dbaas-hobbyist-cc-1-25-1',
      plan_disk: 25,
      plan_ram: 1024,
      plan_vcpus: 1,
      plan_replicas: 0,
      region: 'EWR',
      status: 'Running',
      label: 'some label',
      tag: 'some tag',
      database_engine: 'mysql',
      database_engine_version: 8,
      dbname: 'defaultdb',
      host: 'HOSTNAME_GOES_HERE',
      user: 'vultradmin',
      password: 'PASSWORD_GOES_HERE',
      port: 16751,
      maintenance_dow: 'sunday',
      maintenance_time: '06:00:00',
      latest_backup: '2022-11-02 12:58:18"',
      trusted_ips: ['...'],
      mysql_sql_modes: [
        'ANSI',
        'ERROR_FOR_DIVISION_BY_ZERO',
        'NO_ENGINE_SUBSTITUTION',
        'NO_ZERO_DATE',
        'NO_ZERO_IN_DATE',
        'STRICT_ALL_TABLES'
      ],
      mysql_require_primary_key: true,
      mysql_slow_query_log: false,
      cluster_time_zone: 'America/New_York',
      read_replicas: ['...']
    }
  },
  updateDatabase: {
    database: {
      id: '999c4ed0-f2e4-4f2a-a951-de358ceb9ab5',
      date_created: '2022-05-09 10:13:31',
      plan: 'vultr-dbaas-hobbyist-cc-1-25-1',
      plan_disk: 25,
      plan_ram: 1024,
      plan_vcpus: 1,
      plan_replicas: 0,
      region: 'EWR',
      status: 'Running',
      label: 'some label',
      tag: 'some tag',
      database_engine: 'mysql',
      database_engine_version: 8,
      dbname: 'defaultdb',
      host: 'HOSTNAME_GOES_HERE',
      user: 'vultradmin',
      password: 'PASSWORD_GOES_HERE',
      port: 16751,
      maintenance_dow: 'sunday',
      maintenance_time: '06:00:00',
      latest_backup: '2022-11-02 12:58:18"',
      trusted_ips: ['...'],
      mysql_sql_modes: [
        'ANSI',
        'ERROR_FOR_DIVISION_BY_ZERO',
        'NO_ENGINE_SUBSTITUTION',
        'NO_ZERO_DATE',
        'NO_ZERO_IN_DATE',
        'STRICT_ALL_TABLES'
      ],
      mysql_require_primary_key: true,
      mysql_slow_query_log: false,
      cluster_time_zone: 'America/New_York',
      read_replicas: ['...']
    }
  },
  usage: {
    usage: {
      disk: {
        current_gb: 1.25,
        max_gb: 55,
        percentage: 2.27
      },
      memory: {
        current_mb: 768,
        max_mb: 2048,
        percentage: 37.5
      },
      cpu: {
        percentage: 4.65
      }
    }
  },
  listDatabaseUsers: {
    users: [
      {
        username: 'vultradmin',
        password: 'PASSWORD_GOES_HERE',
        encryption: 'Default (MySQL 8+)'
      },
      {
        username: 'ANOTHER_USER_HERE',
        password: 'PASSWORD_GOES_HERE',
        encryption: 'Legacy (MySQL 5.x)'
      }
    ],
    meta: {
      total: 2
    }
  },
  createDatabaseUser: {
    user: {
      username: 'some_new_user',
      password: 'some_secure_password',
      encryption: 'Default (MySQL 8+)'
    }
  },
  getDatabaseUser: {
    user: {
      username: 'some_username',
      password: 'some_secure_password',
      encryption: 'Default (MySQL 8+)'
    }
  },
  updateDatabaseUser: {
    user: {
      username: 'some_username',
      password: 'some_secure_password',
      encryption: 'Default (MySQL 8+)'
    }
  },
  listDatabaseDbs: {
    dbs: [
      {
        name: 'defaultdb'
      },
      {
        name: 'another_db'
      }
    ],
    meta: {
      total: 2
    }
  },
  createDatabaseDb: {
    db: {
      name: 'new_db_name'
    }
  },
  getDatabaseDb: {
    db: {
      name: 'some_db_name'
    }
  },
  listMaintenanceUpdates: {
    available_updates: ['update_description_here', 'another_description_here']
  },
  startMaintenanceUpdates: {
    message:
      'Maintenance updates initialized. Please note the maintenance consists of switching to a new server that will host the service and all pending updates will be applied. This will cause a short service interruption.'
  },
  listServiceAlerts: {
    alerts: [
      {
        timestamp: '2023-02-10 12:40:19',
        message_type: 'RESOURCE USAGE DISK',
        description:
          'Disk usage is critically high for a database service, service is not performing normally.',
        recommendation:
          'We recommend you review your application or upgrade to the next plan size.',
        resource_type: 'disk'
      },
      {
        timestamp: '2023-02-09 15:41:20',
        message_type: 'MAINTENANCE SCHEDULED',
        description:
          'Mandatory maintenance has been scheduled for a database service.',
        maintenance_scheduled: '2023-02-12 01:00:00 (UTC)'
      }
    ]
  },
  viewMigrationStatus: {
    migration: {
      status: 'complete',
      method: 'replication',
      credentials: {
        host: 'some_host',
        port: 3306,
        username: 'some_username',
        password: 'some_password',
        database: 'some_database',
        ignored_databases: '',
        ssl: true
      }
    }
  },
  databaseStartMigration: {
    migration: {
      status: 'pending',
      credentials: {
        host: 'some_host',
        port: 3306,
        username: 'some_username',
        password: 'some_password',
        database: 'some_database',
        ignored_databases: '',
        ssl: true
      }
    }
  },
  databaseAddReadReplica: {
    database: {
      id: '999c4ed0-f2e4-4f2a-a951-de358ceb9ab5',
      date_created: '2022-05-09 10:13:31',
      plan: 'vultr-dbaas-hobbyist-cc-1-25-1',
      plan_disk: 25,
      plan_ram: 1024,
      plan_vcpus: 1,
      plan_replicas: 0,
      region: 'EWR',
      status: 'Running',
      label: 'new_read_replica_label',
      tag: 'some tag',
      database_engine: 'mysql',
      database_engine_version: 8,
      dbname: 'defaultdb',
      host: 'HOSTNAME_GOES_HERE',
      user: 'vultradmin',
      password: 'PASSWORD_GOES_HERE',
      port: 16751,
      maintenance_dow: 'sunday',
      maintenance_time: '06:00:00',
      latest_backup: '2022-11-02 12:58:18"',
      trusted_ips: ['...'],
      mysql_sql_modes: [
        'ANSI',
        'ERROR_FOR_DIVISION_BY_ZERO',
        'NO_ENGINE_SUBSTITUTION',
        'NO_ZERO_DATE',
        'NO_ZERO_IN_DATE',
        'STRICT_ALL_TABLES'
      ],
      mysql_require_primary_key: true,
      mysql_slow_query_log: false,
      cluster_time_zone: 'America/New_York'
    }
  },
  getBackupInformation: {
    latest_backup: {
      date: '2023-02-07',
      time: '20:51:05'
    },
    oldest_backup: {
      date: '2023-02-05',
      time: '20:51:07'
    }
  },
  databaseRestoreFromBackup: {
    database: {
      id: '999c4ed0-f2e4-4f2a-a951-de358ceb9ab5',
      date_created: '2022-05-09 10:13:31',
      plan: 'vultr-dbaas-hobbyist-cc-1-25-1',
      plan_disk: 25,
      plan_ram: 1024,
      plan_vcpus: 1,
      plan_replicas: 0,
      region: 'EWR',
      status: 'Running',
      label: 'new_restore_label',
      tag: 'some tag',
      database_engine: 'mysql',
      database_engine_version: 8,
      dbname: 'defaultdb',
      host: 'HOSTNAME_GOES_HERE',
      user: 'vultradmin',
      password: 'PASSWORD_GOES_HERE',
      port: 16751,
      maintenance_dow: 'sunday',
      maintenance_time: '06:00:00',
      latest_backup: '2022-11-02 12:58:18"',
      trusted_ips: ['...'],
      mysql_sql_modes: [
        'ANSI',
        'ERROR_FOR_DIVISION_BY_ZERO',
        'NO_ENGINE_SUBSTITUTION',
        'NO_ZERO_DATE',
        'NO_ZERO_IN_DATE',
        'STRICT_ALL_TABLES'
      ],
      mysql_require_primary_key: true,
      mysql_slow_query_log: false,
      cluster_time_zone: 'America/New_York'
    }
  },
  databaseFork: {
    database: {
      id: '999c4ed0-f2e4-4f2a-a951-de358ceb9ab5',
      date_created: '2022-05-09 10:13:31',
      plan: 'vultr-dbaas-startup-cc-2-80-4',
      plan_disk: 80,
      plan_ram: 4096,
      plan_vcpus: 2,
      plan_replicas: 0,
      region: 'SEA',
      status: 'Running',
      label: 'new_fork_label',
      tag: 'some tag',
      database_engine: 'mysql',
      database_engine_version: 8,
      dbname: 'defaultdb',
      host: 'HOSTNAME_GOES_HERE',
      user: 'vultradmin',
      password: 'PASSWORD_GOES_HERE',
      port: 16751,
      maintenance_dow: 'sunday',
      maintenance_time: '06:00:00',
      latest_backup: '2022-11-02 12:58:18"',
      trusted_ips: ['...'],
      mysql_sql_modes: [
        'ANSI',
        'ERROR_FOR_DIVISION_BY_ZERO',
        'NO_ENGINE_SUBSTITUTION',
        'NO_ZERO_DATE',
        'NO_ZERO_IN_DATE',
        'STRICT_ALL_TABLES'
      ],
      mysql_require_primary_key: true,
      mysql_slow_query_log: false,
      cluster_time_zone: 'America/New_York'
    }
  },
  listConnectionPools: {
    connections: {
      used: 12,
      available: 10,
      max: 22
    },
    connection_pools: [
      {
        name: 'first_pool_name',
        database: 'some_db_name',
        username: 'some_username',
        mode: 'transaction',
        size: 5
      },
      {
        name: 'second_pool_name',
        database: 'another_db_name',
        username: 'another_username',
        mode: 'session',
        size: 7
      }
    ],
    meta: {
      total: 2
    }
  },
  createConnectionPool: {
    connection_pool: {
      name: 'new_connection_pool',
      database: 'some_database',
      username: 'some_user',
      mode: 'transaction',
      size: 5
    }
  },
  getConnectionPool: {
    connection_pool: {
      name: 'some_connection_pool',
      database: 'some_database',
      username: 'some_user',
      mode: 'transaction',
      size: 5
    }
  },
  updateConnectionPool: {
    mode: 'session'
  },
  listAdvancedOptions: {
    configured_options: {
      jit: false,
      temp_file_limit: 10000,
      track_io_timing: 'off'
    },
    available_options: [
      {
        name: 'autovacuum_analyze_scale_factor',
        type: 'float',
        min_value: 0,
        max_value: 1
      },
      {
        name: 'autovacuum_analyze_threshold',
        type: 'int',
        min_value: 0,
        max_value: 2147483647
      }
    ]
  },
  updateAdvancedOptions: {
    configured_options: {
      jit: false,
      temp_file_limit: 10000,
      track_io_timing: 'off'
    },
    available_options: [
      {
        name: 'autovacuum_analyze_scale_factor',
        type: 'float',
        min_value: 0,
        max_value: 1
      },
      {
        name: 'autovacuum_analyze_threshold',
        type: 'int',
        min_value: 0,
        max_value: 2147483647
      }
    ]
  },
  listAvailableVersions: {
    available_versions: ['12', '13', '14', '15']
  },
  startVersionUpgrade: {
    message: 'Version upgrade successfully initialized.'
  }
}

util.createTestSuite('databases', mockParameters, mockResponses)
